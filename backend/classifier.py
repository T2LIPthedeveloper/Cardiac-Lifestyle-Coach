from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Simple keyword-based fallback
DIABETES_KEYWORDS = {"glucose", "insulin", "blood sugar", "diabetic"}
HYPERTENSION_KEYWORDS = {"blood pressure", "bp", "hypertension", "systolic"}

# Initialize TF-IDF vectorizer
vectorizer = TfidfVectorizer()

def classify_query(text: str) -> str:
    # Check for direct keyword matches first
    if any(k in text.lower() for k in DIABETES_KEYWORDS):
        return "diabetes"
    if any(k in text.lower() for k in HYPERTENSION_KEYWORDS):
        return "hypertension"

    # Use TF-IDF for semantic similarity if no keyword match
    corpus = [text, "diabetes care and blood sugar management", "high blood pressure and hypertension treatment"]
    vectors = vectorizer.fit_transform(corpus)
    
    query_vector = vectors[0:1]
    diabetes_vector = vectors[1:2]
    hypertension_vector = vectors[2:3]
    
    sim_d = cosine_similarity(query_vector, diabetes_vector)[0][0]
    sim_h = cosine_similarity(query_vector, hypertension_vector)[0][0]

    return "diabetes" if sim_d > sim_h else "hypertension"
