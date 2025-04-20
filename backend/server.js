// Import thư viện
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();  // Load các biến môi trường từ .env

// Tạo ứng dụng Express
const app = express();

// Hàm kết nối MongoDB
const connectDB = async () => {
  try {
    // Kết nối MongoDB trực tiếp bằng URL từ biến môi trường
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1); // Dừng ứng dụng nếu kết nối thất bại
  }
};

// Hàm khởi động server
const startServer = async () => {
  console.log('🚀 Server is starting...');
  
  // Kết nối MongoDB trước khi chạy server
  await connectDB();
  
  // Thêm các route Express vào đây nếu cần
  app.get('/', (req, res) => {
    res.send('Hello, server is running!');
  });

  // Lắng nghe trên cổng 3001
  app.listen(3001, () => {
    console.log('🌐 Server is running on http://localhost:3001');
  });
};

// Khởi chạy server
startServer();

// Ví dụ sử dụng SECRET_KEY (dùng cho JWT hoặc mã hóa)
// Nếu muốn sử dụng SECRET_KEY trong các tác vụ bảo mật:
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 12345 }, process.env.SECRET_KEY, { expiresIn: '1h' });
console.log('JWT Token:', token);

// Kiểm tra token
jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
  if (err) {
    console.error('Invalid token');
  } else {
    console.log('Decoded token:', decoded);
  }
});


