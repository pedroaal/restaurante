import nextConnect from 'next-connect';
import dbConnect from '@/utils/dbConnect';

export default async function createHandler(...middlewares) {
  await dbConnect();
  return nextConnect().use(...middlewares);
}