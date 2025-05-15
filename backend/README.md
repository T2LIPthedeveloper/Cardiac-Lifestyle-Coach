# Cardiac Lifestyle Coach Backend
This is the backend component of the Cardiac Lifestyle Coach application.

## Setup

1. Create python venv and install dependencies:
    ```bash
    python3 -m venv venv
    # Mac/Linux
    source venv/bin/activate
    # Windows
    venv\\Scripts\\Activate.ps1
    
    pip install -r requirements.txt
    ```
2. Configure environment variables:
    - Copy `.env.example` to `.env`
    - Update the variables in `.env` with your configuration

## Running the Server

### Development Mode
```bash
# Run server with hot reload on port 8000
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Production Mode
```bash
uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}
```

## API Documentation

API documentation is available at `/docs` when the server is running.
