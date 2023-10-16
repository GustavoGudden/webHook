const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Event received.' });
});

app.listen(3000, () => {
  console.log('application listening on port 3000');
});
