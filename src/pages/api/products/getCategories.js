import { dbConnect } from '@/utils/dbConnect';
import Category from '@/models/category';

export default async function (req, res) {
  await dbConnect()
  const { method } = req

  switch (method) {
    case 'GET':
      Category.find({})
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