const express = require('express');
const axios = require('axios');
const cors = require('cors'); // CORS 설정

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Notion API 환경 변수
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;

// 기본 경로
app.get('/', (req, res) => {
  res.send('Notion Backend is running!');
});

// Notion 데이터베이스 조회
app.get('/notion', async (req, res) => {
  try {
    if (!NOTION_API_KEY || !DATABASE_ID) {
      throw new Error('NOTION_API_KEY or DATABASE_ID is missing');
    }

    // Notion API 호출
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
      }
    );

    // 데이터 가공
    const results = response.data.results.map((page) => ({
      id: page.id,
      name: page.properties['이름'].title[0]?.plain_text || 'No Name',
      value: page.properties['20DRY']?.number || null,
    }));

    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching Notion data:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// 서버리스 함수 내보내기
module.exports = app;

