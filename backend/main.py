import logging
from contextlib import asynccontextmanager

import dotenv
from classifier import classify_query
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware  # Add this import
from gemini_interface import ask_gemini, setup_gemini
from memory_store import get_stored, store_recommendation
from pydantic import BaseModel
from rag_utils import build_docstore

docstore_cache = {
    "diabetes": [],
    "hypertension": []
}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Load the docstore for each condition
    for condition in ["diabetes", "hypertension"]:
        docstore_cache[condition] = build_docstore(condition)
    
    # Set up the API key for Gemini
    setup_gemini(api_key=dotenv.get_key(dotenv.find_dotenv(), "GEMINI_API_KEY"))
    yield
    # Cleanup resources
    logging.info("Shutting down application, cleaning up resources")
    # Clear the docstore cache to free memory
    docstore_cache.clear()
    # Shutdown: Clean up resources if needed
    # Clean docstore cache or other resources here if necessary


app = FastAPI(lifespan=lifespan)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class QueryRequest(BaseModel):
    query: str

@app.post("/ask")
def ask_ai(request: QueryRequest):
    try:
        condition = classify_query(request.query)
        docs = docstore_cache[condition]
        answer = ask_gemini(request.query, docs)
        logging.info(f"User query: {request.query}")
        logging.info(f"Condition detected: {condition}")

        # Store meal or exercise advice with expanded keyword detection
        if any(k in request.query.lower() for k in ["meal", "meals", "diet", "eat", "food", "nutrition", "cooking", "recipe", "breakfast", "lunch", "dinner", "snack"]):
            result = store_recommendation("meal", answer)
            logging.info(f"Meal recommendation stored: {answer}")
            logging.info(f"Storage result: {result}")
        elif any(k in request.query.lower() for k in ["exercise", "exercises", "workout", "fitness", "training", "cardio", "strength", "activity", "walking", "running", "swimming", "gym"]):
            result = store_recommendation("exercise", answer)
            logging.info(f"Exercise recommendation stored: {answer}")
            logging.info(f"Storage result: {result}")
        return {"answer": answer, "condition": condition}
    except Exception as e:
        logging.error(f"Error processing query: {str(e)}")
        return {"error": str(e)}

@app.get("/meals")
def get_meals():
    try:
        meals = get_stored("meal")
        logging.info(f"Retrieved meals: {meals}")
        return {"meals": meals}
    except Exception as e:
        logging.error(f"Error retrieving meals: {str(e)}")
        return {"error": str(e)}

@app.get("/exercise")
def get_exercise():
    try:
        exercises = get_stored("exercise")
        logging.info(f"Retrieved exercises: {exercises}")
        return {"exercise": exercises}
    except Exception as e:
        logging.error(f"Error retrieving exercises: {str(e)}")
        return {"error": str(e)}
    return {"meals": get_stored("meal")}

@app.get("/exercise")
def get_exercise():
    return {"exercise": get_stored("exercise")}
