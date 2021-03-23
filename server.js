import { resolve } from 'path';
import express from 'express';
import Game from './game.js';

const app = express();
const port = 5000;

app.use(express.static('client/dist', { index: false }));
app.use(express.json());

app.post('/api/shuffle', (req, res) => {
  const { cardIds } = req.body;
  Game.setOrder(cardIds);
  res.send(Game.pictures.map((p) => p.order));
});

app.get('/api/getPictureByOrder/:order', (req, res) => {
  const { order } = req.params;
  const result = Game.getOrderById(order);
  res.send(result);
});

app.get('*', (_, res) => {
  res.sendFile(resolve('client/dist', 'index.html'));
});

app.listen(port, () => console.log(`app is listening on port: ${port}`));
