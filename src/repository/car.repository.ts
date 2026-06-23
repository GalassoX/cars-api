import { db } from "../database/index.js";
import type { CarInfo } from "../types.js";

export async function findCar(car: Partial<CarInfo>, isSuggestion: boolean): Promise<CarInfo[]> {
  const query = db.selectFrom('cars').selectAll();

  if (car.make) {
    query.where('make', '=', car.make);
  }
  if (car.model) {
    query.where('model', '=', car.model);
  }
  if (car.type) {
    query.where('cars.type', '=', car.type);
  }
  if (car.origin) {
    query.where('cars.origin', '=', car.origin);
  }
  if (car.drivetrain) {
    query.where('cars.drivetrain', '=', car.drivetrain);
  }
  if (car.msrp) {
    query.where('cars.msrp', '=', car.msrp);
  }
  if (car.invoice) {
    query.where('cars.invoice', '=', car.invoice);
  }
  if (car.engine_size) {
    query.where('cars.engine_size', '=', car.engine_size);
  }
  if (car.cylinders) {
    query.where('cars.cylinders', '=', car.cylinders);
  }
  if (car.horsepower) {
    query.where('cars.horsepower', '=', car.horsepower);
  }
  if (car.mpg_city) {
    query.where('cars.mpg_city', '=', car.mpg_city);
  }
  if (car.mpg_highway) {
    query.where('cars.mpg_highway', '=', car.mpg_highway);
  }
  if (car.weight) {
    query.where('cars.weight', '=', car.weight);
  }
  if (car.wheelbase) {
    query.where('cars.wheelbase', '=', car.wheelbase);
  }
  if (car.length) {
    query.where('cars.length', '=', car.length);
  }
  if (isSuggestion) {
    query.where('is_suggestion', '=', true);
  }
  return query.execute();
}

export async function createCarForSuggestion(carInfo: CarInfo): Promise<bigint> {
  const insertQuery = await db.insertInto('cars')
    .values({
      make: carInfo.make,
      model: carInfo.model,
      type: carInfo.type,
      origin: carInfo.origin,
      drivetrain: carInfo.drivetrain,
      msrp: carInfo.msrp,
      invoice: carInfo.invoice,
      engine_size: carInfo.engine_size,
      cylinders: carInfo.cylinders,
      horsepower: carInfo.horsepower,
      mpg_city: carInfo.mpg_city,
      mpg_highway: carInfo.mpg_highway,
      weight: carInfo.weight,
      wheelbase: carInfo.wheelbase,
      length: carInfo.length,
      is_suggestion: true
    })
    .execute();

  return insertQuery[0]?.insertId || BigInt(0);
}

export async function createCarSuggestion(carId: string): Promise<bigint> {
  const insertQuery = await db.insertInto('car_suggestions')
    .values({
      car_id: carId,
      votes: 0,
      enabled: true
    })
    .execute();

  return insertQuery[0]?.insertId || BigInt(0);
}

export async function voteCarSuggestion(carId: string, vote: number): Promise<void> {
  await db.updateTable('car_suggestions')
    .set((eb) => ({
      votes: eb('votes', '+', vote)
    }))
    .where('car_id', '=', carId)
    .execute();
}