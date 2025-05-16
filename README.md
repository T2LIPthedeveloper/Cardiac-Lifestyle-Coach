# 💊 CareMate AI — Diabetes & Hypertension Assistant
**Authors: Kripashree S, Atul Parida**

CareMate AI is a Gemini-powered AI coach that offers meal and exercise guidance, interprets vitals, and retrieves medically grounded advice for individuals managing diabetes and hypertension.

Built for the **Healthcare** category at **Google APAC Solution Challenge 2025**.

## 🧱 Project Structure

```
project-root/
├── backend/            # FastAPI + Gemini + RAG logic
│   ├── main.py
│   ├── ...
├── app/                # React Native (Expo) frontend
├── README.md
├── docker-compose.yml
└── .dockerignore
```

## 🚀 Quick Start: Development

### 1️⃣ Backend (FastAPI)

#### ⬇️ Install Dependencies

```bash
python -m venv venv

# macOS/Linux
source venv/Scripts/Activate
# Windows
venv/Scripts/Activate.ps1

cd backend
pip install -r requirements.txt
```

#### ▶️ Run FastAPI Server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

The server will be live at: `http://localhost:8000`.

### 2️⃣ Frontend (React Native with Expo)

#### ⬇️ Install Dependencies

```bash
npm install
```

#### ▶️ Start Expo

```bash
npx expo start
```

Then choose to open in:
- Android Emulator
- iOS Simulator
- Expo Go App

#### 🔗 Backend Connection (important!)

Use these URLs from React Native depending on environment:

| Platform          | URL to use for API (`fetch`)        |
|------------------|--------------------------------------|
| Web              | `http://localhost:8000`              |
| iOS Simulator    | `http://localhost:8000`              |
| Android Emulator | `http://10.0.2.2:8000`               |
| Physical Device  | `http://<your-ip>:8000`              |

## 🐳 Run with Docker (Optional)

If you have Docker installed, you can use:

```bash
docker-compose up --build
```

This runs both frontend and backend services (if Dockerized).

## 📦 API Endpoints (Backend)

| Method | Endpoint     | Description                              |
|--------|--------------|------------------------------------------|
| POST   | `/ask`       | Send a health query                      |
| GET    | `/meals`     | Get saved meal advice                    |
| GET    | `/exercise`  | Get saved exercise suggestions           |

## 🧠 Powered By

- Google Vertex AI (Gemini Pro)
- LangChain
- FastAPI
- React Native + Expo
- GCP Cloud Storage

## 📸 Screenshots & Diagrams

> Add your mockups or prototype screenshots here.

## 📽️ Demo & Links

- 🔗 [Live Demo](#)
- 📹 [Demo Video](#)
- 📝 [Pitch Deck (Slides)](#)

## 🤝 Contributing

Pull requests welcome. For major changes, please open an issue first to discuss.

## 📄 License

[MIT License](LICENSE)
