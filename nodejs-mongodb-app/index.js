const express = require('express');
const connect = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/books', async (req, res) => {
  const db = await connect();
  const books = await db.collection('books').find().toArray();
  res.json(books);
});

app.post('/api/books', async (req, res) => {
  const db = await connect();
  const result = await db.collection('books').insertOne(req.body);
  res.json(result.ops[0]);
});

app.put('/api/books/:id', async (req, res) => {
  const db = await connect();
  const result = await db.collection('books').updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(result.modifiedCount);
});

app.delete('/api/books/:id', async (req, res) => {
  const db = await connect();
  const result = await db.collection('books').deleteOne({ _id: req.params.id });
  res.json(result.deletedCount);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
