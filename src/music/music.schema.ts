import * as mongoose from 'mongoose';

export const MusicSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: String,
  letter: String,
  category: String,
  launchedAt: Date,
  upload_by: String,
  created_at: { type: Date, default: Date.now },
});