import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const orders = [];

// Routes
app.get("/", (req, res) => {
  res.send("Rubik's Cube backend is running");
});

// GET all orders
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// POST new order
app.post("/api/orders", (req, res) => {
  const orderData = req.body;

  const newOrder = {
    id: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toISOString(),
    ...orderData,
  };

  orders.unshift(newOrder);
  console.log("New Order Received:", newOrder);

  res.status(201).json(newOrder);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
