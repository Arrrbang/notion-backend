const express = require('express');
const cors = require('cors');

const app = express();

// CORS 설정: GitHub Pages 출처만 허용
app.use(cors({
  origin: 'https://arrrbang.github.io', // GitHub Pages의 출처
  methods: ['GET', 'POST'],             // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type', 'Authorization'], // 허용할 헤더
  credentials: true                     // 인증 쿠키 허용 (필요한 경우)
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
