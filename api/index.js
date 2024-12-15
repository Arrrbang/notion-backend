const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors((req, callback) => {
  const whitelist = ['https://arrrbang.github.io'];
  const origin = req.header('Origin');
  if (whitelist.includes(origin)) {
    callback(null, { origin: true });
  } else {
    callback(null, { origin: false });
  }
}));

app.use(express.json());

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
