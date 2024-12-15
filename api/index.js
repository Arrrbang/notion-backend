const express = require('express');
const cors = require('cors');

const app = express();

// CORS 설정: 모든 출처 허용 (개발용)
app.use(cors({
  origin: 'https://arrrbang.github.io',
  methods: ['GET', 'POST', 'OPTIONS'], // OPTIONS 메서드 허용
  allowedHeaders: ['Content-Type', 'Authorization'] // 헤더 허용
}));

// Preflight 요청에 대한 응답 설정
app.options('/notion', cors()); // OPTIONS 요청에 CORS 응답

app.use(express.json());

// 테스트 라우트
app.get('/notion', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://arrrbang.github.io');
  res.json({
    success: true,
    data: [
      { id: '1', name: 'SAVANNAH', value: 4272.818182 },
      { id: '2', name: 'SEATTLE', value: 2163.571429 }
    ]
  });
});

module.exports = app;
