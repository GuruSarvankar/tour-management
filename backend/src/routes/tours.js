import { listAllTours } from "../services/toursService.js";

export function toursRoutes(app) {
  // route to get tours data
  app.get(`/api/v1/tours`, async (req, res) => {
    try {
      return res.json(await listAllTours());
    } catch (error) {
      console.error("Error listing tours", error);
      return res.status(500).end();
    }
  });
}
