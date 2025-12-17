const STORAGE_KEY = "rubiks_orders";
const API_URL = "http://192.168.29.239:5000/api/orders";

export const saveOrder = async (orderData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Failed to place order");
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving order:", error);
    throw error;
  }
};

export const getOrders = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};
