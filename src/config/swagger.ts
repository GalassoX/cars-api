import swaggerJsdoc from "swagger-jsdoc";
import pkg from "../../package.json" with { type: 'json' };

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Cars API",
      version: pkg.version,
      description: pkg.description,
    }
  },
  apis: [
    './src/router/**/*.ts'
  ]
});