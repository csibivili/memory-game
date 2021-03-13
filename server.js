import { resolve } from 'path';
import express from 'express';
import Game from './game.js';

const app = express();
const port = 5000;

app.use(express.static('client/dist', { index: false }));

app.get('/api/shuffle', (_, res) => {
  Game.setOrder();
  res.send({ message: 'shuffled', order: Game.pictures.map((p) => p.order) });
});

app.get('/api/getOrderByPictureId/:id', (req, res) => {
  const { id } = req.params;
  const result = Game.getOrderById(id);
  res.send(result);
});

app.get('*', (_, res) => {
  res.sendFile(resolve('client/dist', 'index.html'));
});

app.listen(port, () => console.log(`app is listening on port: ${port}`));
