const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

port = 4000;

app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});

app.listen(port, () => console.log(`Server started on port ${port}`)); 