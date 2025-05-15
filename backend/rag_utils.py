import xml.etree.ElementTree as ET

import dotenv
import requests
from bs4 import BeautifulSoup

BASE_URL = dotenv.get_key(dotenv.find_dotenv(), "BASE_URL")

def list_gcs_files():
    url = BASE_URL
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Failed to fetch files from GCS: {response.status_code}")
    
    root = ET.fromstring(response.text)
    namespace = {'s3': 'http://doc.s3.amazonaws.com/2006-03-01'}
    
    files = []
    for content in root.findall('s3:Contents', namespace):
        key = content.find('s3:Key', namespace).text
        if key.endswith(".pdf") or key.endswith(".txt"):
            files.append(BASE_URL + key)
    return files

def categorize_files(files):
    categorized = {"diabetes": [], "hypertension": []}
    
    for file in files:
        if "diabetes" in file.lower():
            categorized["diabetes"].append(file)
        elif "hypertension" in file.lower():
            categorized["hypertension"].append(file)
    
    return categorized

def build_docstore(category: str) -> list:
    all_files = list_gcs_files()
    categorized_files = categorize_files(all_files)
    
    if category not in categorized_files:
        return []
    
    docs = []
    for link in categorized_files[category]:
        try:
            content = requests.get(link).text
            docs.append({"url": link, "content": content})
        except:
            continue
    return docs[:5]  # Limit to top 5 documents
