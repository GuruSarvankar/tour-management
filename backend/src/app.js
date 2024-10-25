import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { hotelsRoutes } from './routes/hotels.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

hotelsRoutes(app);

// define a GET route
app.get('/', (req, res) => {
  res.send('Welcome to Hotel Management Backend.');
});

export { app };
