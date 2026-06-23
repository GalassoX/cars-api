CREATE TABLE IF NOT EXISTS cars (
  id INTEGER PRIMARY KEY,
  make TEXT,
  model TEXT,
  type TEXT,
  origin TEXT,
  drivetrain TEXT,
  msrp TEXT,
  invoice TEXT,
  engine_size TEXT,
  cylinders TEXT,
  horsepower TEXT,
  mpg_city TEXT,
  mpg_highway TEXT,
  weight TEXT,
  wheelbase TEXT,
  length TEXT,
  is_suggestion NUMERIC
);

CREATE TABLE IF NOT EXISTS suggestions (
  id INTEGER PRIMARY KEY,
  car_id INTEGER,
  votes INTEGER,
  enabled BOOLEAN
);