const express = require('express');
const cors = require('cors');

const app = express();

// 기존 CORS 설정을 동적 설정으로 변경
app.use(cors((req, callback) => {
  const whitelist = ['https://arrrbang.github.io']; // 허용할 출처 리스트
  const origin = req.header('Origin');
  if (whitelist.includes(origin)) {
    callback(null, { origin: true }); // 요청 출처 허용
  } else {
    callback(null, { origin: false }); // 허용되지 않은 출처
  }
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
