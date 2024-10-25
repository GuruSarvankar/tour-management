import mongoose, { Schema } from 'mongoose';

const hotelSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

export const Hotel = mongoose.model('hotel', hotelSchema);
