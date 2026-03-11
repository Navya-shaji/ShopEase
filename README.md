# ShopEase 🛒

ShopEase is a modern, responsive e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). It features a sleek product listing page, search functionality, category filtering, and a shopping cart experience.

## ✨ Features

- **Product Management**: View a wide variety of products with detailed descriptions and pricing.
- **Search & Filter**: Easily find products using the search bar or by filtering through categories like Electronics, Footwear, Accessories, etc.
- **Shopping Cart**: Add products to your cart, adjust quantities, and see real-time price updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Database Seeding**: Easily populate the database with sample data for development.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI development.
- **Vite**: Ultra-fast build tool and development server.
- **CSS3**: Custom styling for a premium look.
- **React Hot Toast**: For beautiful, non-intrusive notifications.

### Backend
- **Node.js & Express**: Robust and scalable server-side environment.
- **MongoDB & Mongoose**: Flexible NoSQL database and elegant object modeling.
- **CORS**: Cross-Origin Resource Sharing enabled for frontend-backend communication.
- **Dotenv**: Secure environment variable management.

## 📁 Project Structure

```text
ShopEase/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components (Navbar, Cart, ProductList)
│   │   ├── App.jsx     # Main application logic
│   │   └── main.jsx    # Entry point
│   └── ...
├── backend/            # Express backend application
│   ├── models/         # Mongoose schemas (Product)
│   ├── server.js       # Main server file and routes
│   └── ...
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB account (local or Atlas)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your configuration:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Seed the database (optional but recommended for first run):
   - Start the server: `npm start`
   - Visit: `http://localhost:5000/api/products/seed`
5. Start the backend:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`).

## 🔌 API Endpoints

- `GET /api/products`: Retrieve all products (supports `category` and `search` query parameters).
- `GET /api/products/seed`: Deletes existing products and populates the database with sample data.

## 📄 License
This project is licensed under the ISC License.
