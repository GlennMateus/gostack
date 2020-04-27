import express from 'express';
import routes from './routes/index';
import './database/index';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
