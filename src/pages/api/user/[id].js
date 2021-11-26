import { dbConnect } from '@/utils/dbConnect';
import User from '@/models/user';

export default async function (req, res) {
  await dbConnect()
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      const user = await User.find({ email: id });
      res.status(200).json()
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json()
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}