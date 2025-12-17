# Rubik's Cube Shop 🧩

A modern, responsive e-commerce web application for selling high-performance puzzles. Built with React.js and Vite, featuring a complete shopping experience from product browsing to checkout.

## ✨ Features

- **Dynamic Storefront**: Browse specialized puzzles (2x2, 3x3, 4x4) with real-time price filtering.
- **Cart Management**: Add/remove items, adjust quantities, and view delivery cost estimates.
- **Seamless Checkout**:
  - Integrated delivery options (Standard vs. Express).
  - Dynamic order summary calculation.
  - Multi-step checkout flow (Cart -> Checkout -> Payment -> Success).
- **Backend Integration**: Custom Express server to handle order processing and data persistence (in-memory).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Modern UI/UX**: Glassmorphism effects, smooth transitions, and toast notifications.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router v7
- **Styling**: CSS3 (Variables, Flexbox/Grid, Responsive Media Queries)
- **Icons**: Lucide React
- **Backend**: Node.js, Express.js (for API handling)
- **State Management**: React Context API

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- npm (Node Package Manager)
- Node.js (v16 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abhay-S-R/Rubiks-Cube.git
   cd Rubiks-Cube
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the Backend Server**
   This handles API requests for orders.

   ```bash
   node server.js
   ```

   _Server runs on http://localhost:5000_

4. **Start the Frontend Application**
   Open a new terminal terminal and run:
   ```bash
   npm run dev
   ```
   _Frontend typically runs on http://localhost:5173_

## 📁 Project Structure

```bash
rubiks-cube/
├── server.js               
├── src/
│   ├── components/         
│   ├── context/            
│   ├── data/               
│   ├── pages/              
│   ├── services/           
│   ├── utils/              
│   └── App.jsx             
└── ...
```

## 🛡️ API Endpoints

| Method | Endpoint      | Description         |
| :----- | :------------ | :------------------ |
| GET    | `/api/orders` | Retrieve all orders |
| POST   | `/api/orders` | Create a new order  |
| GET    | `/`           | Health check        |
