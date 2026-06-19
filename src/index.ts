import csv from 'csv-parser';
import fs from 'node:fs';
import express from 'express';
import { PORT } from './lib/constants.js';

const app = express();

app.get('/', (req, res) => {
  const results: any[] = [];

  fs.createReadStream('./cars.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log('CSV file successfully processed');
      res.json({ cars: results });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});