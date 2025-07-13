const express = require('express');
const app = express();
app.use(express.json());

// Basit sipariş listesi
let orders = [];

// Sipariş ekleme
app.post('/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

// Siparişleri listeleme
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
