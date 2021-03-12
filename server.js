const path = require('path');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('client/dist', { index: false }));

app.get('*', (_, res) => res.sendFile(path.resolve('client/dist', 'index.html')));

app.listen(port, () => console.log(`app is listening on port: ${port}`));
