import { listHotels } from '../services/hotels.js';

export function hotelsRoutes(app) {
  // route to get hotels data
  app.get(`/api/v1/hotels`, async (req, res) => {
    try {
      const hotels = await listHotels();

      if (!hotels) {
        return res.status(400).end;
      }

      return res.json(hotels);
    } catch (error) {
      return res.status(500).send(`Something went wrong! ${error}`).end();
    }
  });
}
