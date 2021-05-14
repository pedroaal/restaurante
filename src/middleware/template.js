import nextConnect from 'next-connect';

export default function createHandler(...middlewares) {
  return nextConnect().use( ...middlewares);
}