const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const game = require('./game');

app.use(cors());
app.use(express.static('client/dist', { index: false }));

app.get('/shuffle', (_, res) => {
  game.setOrder();
  res.send({ message: 'shuffled', order: game.pictures.map((p) => p.order) });
});

app.get('/getOrderByPictureId/:id', (req, res) => {
  const { id } = req.params;
  const result = game.getOrderById(id);
  res.send(result);
});

app.get('*', (_, res) => {
  res.sendFile(path.resolve('client/dist', 'index.html'));
});

app.listen(port, () => console.log(`app is listening on port: ${port}`));
