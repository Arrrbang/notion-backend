const express = require('express');
const cors = require('cors');

const app = express();

// CORS 설정: OPTIONS 요청 포함
app.use(cors({
  origin: 'https://arrrbang.github.io', // 허용할 출처
  methods: ['GET', 'POST', 'OPTIONS'], // 허용할 메서드
  allowedHeaders: ['Content-Type']     // 허용할 헤더
}));

// Preflight 요청 명시적으로 처리
app.options('*', cors());

// JSON 파싱
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
