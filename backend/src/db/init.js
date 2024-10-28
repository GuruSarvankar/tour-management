import mongoose from 'mongoose';

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/hotel-management';

  mongoose.connection.on('open', () => {
    console.log(
      `Successfully connected to Hotel Management DB at ${DATABASE_URL}`
    );
  });

  const connection = mongoose.connect(DATABASE_URL);
  return connection;
}
