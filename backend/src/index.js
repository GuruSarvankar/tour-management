import { app } from './app.js';
import { initDatabase } from './db/init.js';

try {
  // First call initDatabase, and only when the database initialized, start the Express app.
  await initDatabase();

  /**
   * @description define a port, make the Express app listen to it, and log a message
   * telling us where the server is running
   */
  const PORT = 3005;
  app.listen(PORT, () => {
    console.log(
      `Hotel Management's backend server listening on http://localhost:${PORT}`
    );
  });
} catch (err) {
  console.error(`Error connecting to database: ${err}`);
}
