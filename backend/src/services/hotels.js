import { Hotel } from '../db/models/hotel.js';

export async function listHotels() {
  return await Hotel.find();
}
