import google.generativeai as genai


def setup_gemini(api_key):
    """Initialize the Gemini API with your API key"""
    genai.configure(api_key=api_key)

def ask_gemini(prompt: str, context_docs: list, api_key=None):
    """Query the Gemini-2.0-flash-lite model"""
    if api_key:
        setup_gemini(api_key)
    
    # Get the model
    model = genai.GenerativeModel('gemini-2.0-flash-lite')
    
    context_text = "\n\n".join(doc["content"] for doc in context_docs[:5])  # Top 5 docs
    
    format_guide = """
    Format guide:
    For meals: Provide name, list of ingredients, approximate calories, and brief preparation instructions.
    Example: 
    Meal: Grilled Salmon
    Ingredients: salmon fillet, olive oil, lemon
    Calories: 350
    Preparation: Grill for 12 minutes
     
    For exercise: Include name, recommended duration, intensity level, and estimated calories burned.
    Example:
    Exercise: Brisk Walking
    Duration: 30 minutes
    Intensity: moderate
    Calories burned: 150
    """
    
    final_prompt = f"{context_text}\n\nUser Query: {prompt}\n\n{format_guide}\n\nRespond in a helpful, medical-advisory tone. Do not use markdown formatting like brackets, bold or italics, quotes, disclaimers or warnings. Just provide the answer in a clear and concise manner."
    
    # Generate content with the model
    response = model.generate_content(
        contents=final_prompt,
        generation_config={
            "max_output_tokens": 1024,
            "temperature": 0.2,
            "top_p": 0.8,
            "top_k": 40
        }
    )
    
    return response.text
