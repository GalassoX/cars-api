export type CarInfoCSV = {
  Make: string;
  Model: string;
  Type: string;
  Origin: string;
  DriveTrain: string;
  MSRP: number;
  Invoice: number;
  EngineSize: number;
  Cylinders: number;
  Horsepower: number;
  MPG_City: number;
  MPG_Highway: number;
  Weight: number;
  Wheelbase: number;
  Length: number;
}

export type CarInfo = {
  id: number;
  make: string;
  model: string;
  type: string;
  origin: string;
  drivetrain: string;
  msrp: number;
  invoice: number;
  engine_size: number;
  cylinders: number;
  horsepower: number;
  mpg_city: number;
  mpg_highway: number;
  weight: number;
  wheelbase: number;
  length: number;
  is_suggestion: boolean;
}

export type APIResponse<T> = {
  statusCode?: HttpStatus;
  data: T;
}

export type ErrorAPIResponse = {
  statusCode?: HttpStatus;
  error: {
    code: number;
    message: string;
  };
}