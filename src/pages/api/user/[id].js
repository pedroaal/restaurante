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
      User.find({ email: id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
      break
    // case 'PUT':
    //   // Update or create data in your database
    //   res.status(200).json()
    //   break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}