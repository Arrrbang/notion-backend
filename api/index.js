const express = require('express');
const cors = require('cors');

const app = express();

// CORS 설정: GitHub Pages 출처만 허용
app.use(cors({
  origin: 'https://arrrbang.github.io', // GitHub Pages 도메인
  methods: ['GET', 'POST'],            // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type'],    // 허용할 헤더
}));


app.use(express.json());

// 테스트용 라우트
app.get('/notion', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: '1', name: 'SAVANNAH', value: 4272.818182 },
      { id: '2', name: 'SEATTLE', value: 2163.571429 }
    ]
  });
});

module.exports = app;
