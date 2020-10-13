import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send({ message: 'ola' });
});
app.listen(3333);
