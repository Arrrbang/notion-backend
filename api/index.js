const express = require('express');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors({
  origin: 'https://arrrbang.github.io', // GitHub Pages 출처만 허용
  methods: ['GET', 'POST'],            // 허용할 HTTP 메서드
  credentials: true                    // 쿠키/헤더 전달 허용 (필요 시)
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/notion', async (req, res) => {
  // Notion 데이터를 반환하는 기존 로직
  res.json({
    success: true,
    data: [
      { id: '1', name: 'SAVANNAH', value: 4272.818182 },
      // 다른 데이터
    ]
  });
});

module.exports = app;

