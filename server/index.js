const express = require('express');
const app = express();

const connectToDB = require('./db/conn');
const cors = require('cors');
const Axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

connectToDB();

app.get('/', (req, res) => {
  console.log(req.baseUrl);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
