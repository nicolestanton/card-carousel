const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.get('/recipes', async (req, res) => {
  try {
    const response = await axios.get('https://simplycook.com/api/recipes', {
      // You can pass additional headers or parameters here
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy request failed' });
  }
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });


app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});