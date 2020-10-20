import mongoose, { Mongoose } from 'mongoose';
import { MONGO_URI } from '@src/config/database';

export const connect = async (): Promise<Mongoose> => {
  return mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const close = async (): Promise<void> => {
  mongoose.connection.close();
};
