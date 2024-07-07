require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Middleware to parse JSON
app.use(express.json());

// Use the API routes
app.use('/api', require('./routes/api'));

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



