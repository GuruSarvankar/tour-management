import { listHotels } from '../services/hotels.js';

export function hotelsRoutes(app) {
  // route to get hotels data
  app.get(`/api/v1/hotels`, async (req, res) => {
    try {
      const hotels = await listHotels();

      if (hotels === null) {
        return res.status(400).end;
      }

      return res.json(hotels);
    } catch (error) {
      console.error('Error listing hotels', error);
      return res.status(500).end();
    }
  });
}
