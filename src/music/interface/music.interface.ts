import { Document } from 'mongoose';

export interface Music extends Document {
  readonly title: String;
  readonly author: String;
  readonly rating: String;
  readonly letter: String;
  readonly category: String;
  readonly launchedAt: Date;
  readonly upload_by: String;
  readonly created_at: Date;
}