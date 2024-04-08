import express from 'express';

const postRoute = express.Router();

postRoute.get('/test', (req, res) => {
  console.log('works');
});

postRoute.post('/test', (req, res) => {
  console.log('works');
});

postRoute.put('/test', (req, res) => {
  console.log('works');
});

postRoute.delete('/test', (req, res) => {
  console.log('works');
});

export default postRoute;
