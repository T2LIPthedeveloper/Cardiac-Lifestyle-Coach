import json
import os

# Create datastore directory if it doesn't exist
datastore_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'datastore')
os.makedirs(datastore_dir, exist_ok=True)

def store_recommendation(category: str, text: str):
    """Store a recommendation in the appropriate JSON file.
    
    # Format guide for Gemini:
    # For meals: Structure as JSON with keys for 'name', 'ingredients', 'calories', 'preparation'
    # Example: {"name": "Grilled Salmon", "ingredients": ["salmon fillet", "olive oil", "lemon"], 
    #           "calories": 350, "preparation": "Grill for 12 minutes"}
    # 
    # For exercise: Structure as JSON with keys for 'name', 'duration', 'intensity', 'calories_burned'
    # Example: {"name": "Brisk Walking", "duration": "30 minutes", "intensity": "moderate", 
    #           "calories_burned": 150}
    """
    processed_data = process_gemini_response(category, text)
    if processed_data:
        current_data = get_stored(category)
        current_data.append(processed_data)
        
        # Write to the appropriate file
        if category == "meal":
            file_path = os.path.join(datastore_dir, 'meal_idx.json')
        elif category == "exercise":
            file_path = os.path.join(datastore_dir, 'exercise_idx.json')
        else:
            return False
            
        with open(file_path, 'w') as f:
            json.dump(current_data, f)
        return True
    return False

def process_gemini_response(category: str, response_text: str):
    """Process and validate the response from Gemini.
    
    Args:
        category: Either "meal" or "exercise"
        response_text: Text response from Gemini
        
    Returns:
        Processed and validated JSON data as dictionary if valid,
        or None if processing failed
    """
    try:
        # Try to extract JSON from the response text
        # Look for content between {} brackets
        start_idx = response_text.find('{')
        end_idx = response_text.rfind('}')
        
        if start_idx >= 0 and end_idx > start_idx:
            json_str = response_text[start_idx:end_idx+1]
            data = json.loads(json_str)
            
            # Validate required fields
            if category == "meal":
                required_fields = ['name', 'ingredients', 'calories', 'preparation']
            elif category == "exercise":
                required_fields = ['name', 'duration', 'intensity', 'calories_burned']
            else:
                return None
                
            if all(field in data for field in required_fields):
                return data
        
        return None
    except (json.JSONDecodeError, ValueError):
        return None

def get_stored(category: str):
    """Retrieve stored recommendations for the specified category.
    
    Args:
        category: Either "meal" or "exercise"
        
    Returns:
        List of stored recommendations or empty list if category is unknown
    """
    if category not in ["meal", "exercise"]:
        return []
        
    file_path = os.path.join(datastore_dir, f'{category}_idx.json')
    
    if not os.path.exists(file_path):
        return []
        
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except (json.JSONDecodeError, FileNotFoundError):
        return []
