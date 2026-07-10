# 🔗 AI URL Shortener & Analytics Platform

A full-stack URL shortening application that allows users to create short links, redirect to original URLs, and track link analytics such as click counts and browser statistics.

## 🚀 Features

- Create shortened URLs from long URLs
- Automatic redirection using short codes
- View all created links
- Track total clicks and analytics
- Interactive analytics dashboard with charts
- Responsive and user-friendly UI
- PostgreSQL database integration
- Redis caching support (optional)
- Docker support for containerized deployment

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Recharts
- CSS3

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Redis (Optional)

### Tools
- Git & GitHub
- Postman
- Docker

---

## 📂 Project Structure

```text
url-shortener
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── frontend1
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── docs
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/ai-url-shortener.git
cd ai-url-shortener
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

DATABASE_URL=postgres://postgres:your_password@localhost:5432/url_shortener

REDIS_HOST=localhost
REDIS_PORT=6379

GEMINI_API_KEY=your_gemini_api_key
```

Start backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend1
npm install
npm run dev
```

Application runs on:

```text
Frontend: http://localhost:5173
Backend: http://localhost:5000
```

---

## 🗄️ Database Setup

Create database:

```sql
CREATE DATABASE url_shortener;
```

---

## 📡 API Endpoints

### Create Short URL

```http
POST /api/links
```

Request:

```json
{
  "title": "Google",
  "originalUrl": "https://www.google.com"
}
```

---

### Get All Links

```http
GET /api/links
```

---

### Get Link By ID

```http
GET /api/links/:id
```

---

### Redirect URL

```http
GET /r/:shortCode
```

---

### Get Analytics

```http
GET /api/analytics/:id
```

---

## 📊 Features Implemented

- URL shortening and redirection
- Click tracking
- Browser analytics
- Dashboard for managing links
- Responsive frontend
- RESTful API architecture
- Database persistence using PostgreSQL

---

## 🔮 Future Enhancements

- User Authentication (JWT)
- Custom aliases
- Expiration dates for links
- QR Code generation
- Geo-location analytics
- AI-powered insights
- Redis caching optimization
- Docker deployment

---

## 📸 Screenshots

Add your application screenshots here.

---

## 👨‍💻 Author

**Saiteja Elukapally**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ If you like this project, give it a star on GitHub!
