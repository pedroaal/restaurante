import nextConnect from 'next-connect';
import dbConnect from '@/util/dbConnect';

export default function createHandler(...middlewares) {
  await dbConnect();
  return nextConnect().use(...middlewares);
}