import type { Generated, Insertable, Selectable, Updateable } from "kysely";

interface CarTable {
  id: Generated<number>;
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

export type Car = Selectable<CarTable>;
export type NewCar = Insertable<CarTable>;
export type CarUpdated = Updateable<CarTable>;

interface CarSuggestionTable {
  id: Generated<number>;
  car_id: string;
  votes: number;
  enabled: boolean;
}

export type CarSuggestion = Selectable<CarSuggestionTable>;
export type NewCarSuggestion = Insertable<CarSuggestionTable>;
export type CarSuggestionUpdated = Updateable<CarSuggestionTable>;

export interface Database {
  cars: CarTable;
  car_suggestions: CarSuggestionTable;
}