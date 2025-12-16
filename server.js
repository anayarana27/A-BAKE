const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve HTML/CSS/JS files

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form data:', req.body);

  // Aap yahan database save kar sakte ho
  res.json({ status: 'success', message: 'Thank you for contacting us!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
