// Import thư viện
const mongoose = require('mongoose');
const express = require('express');

// Tạo ứng dụng Express
const app = express();

// Middleware để xử lý JSON request body
app.use(express.json());

// Hàm kết nối MongoDB
const connectDB = async () => {
  try {
    // Kết nối MongoDB trực tiếp bằng URL
    await mongoose.connect('mongodb://federateddatabaseinstance0-ladv0.a.query.mongodb.net/airbnb?ssl=true&authSource=admin', {
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
  console.log('🚀 Server is running...');
  
  // Kết nối MongoDB trước khi chạy server
  await connectDB();
  
  // Thêm route Echo
  app.post('/echo', (req, res) => {
    const { message } = req.body;  // Lấy message từ body request

    if (message) {
      res.json({ echo: message });  // Phản hồi lại message
    } else {
      res.status(400).json({ error: 'No message provided' });  // Nếu không có message
    }
  });

  // Thêm các route Express khác vào đây nếu cần

  // Lắng nghe trên cổng 3001
  app.listen(3001, () => {
    console.log('🌐 Server is running on http://localhost:3001');
  });
  
  // In thông báo "Server chạy ngon rồi" vào console
  console.log('Server chạy ngon rồi');
};

// Khởi chạy server
startServer();
