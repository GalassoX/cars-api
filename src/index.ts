import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { ERROR_MESSAGES, HttpStatus, PORT } from './lib/constants.js';
import router from './router/index.js';
import { handleExceptions } from './middlewares/handleExceptions.js';
import { logExceptions } from './middlewares/logExceptions.js';
import { BusinessError } from './lib/errors/businessError.js';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use((req, res, next) => {
  next(new BusinessError(HttpStatus.NotFound, ERROR_MESSAGES.ROUTE_NOT_FOUND))
});

app.use(logExceptions);
app.use(handleExceptions);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});