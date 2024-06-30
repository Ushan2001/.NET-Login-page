const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  console.log('Received login request:', req.body);
  try {
    const response = await axios.post('http://localhost:5100/api/auth/login', req.body);
    console.log('Response from ASP.NET Core:', response.data);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error response from ASP.NET Core:', error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Internal server error:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
