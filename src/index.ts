import express from 'express';
import { PORT } from './lib/constants.js';
import router from './router/index.js';
import { handleExceptions } from './middlewares/handleExceptions.js';
import { logExceptions } from './middlewares/logExceptions.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.use(logExceptions);
app.use(handleExceptions);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});