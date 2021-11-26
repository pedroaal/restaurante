import { dbConnect } from '@/utils/dbConnect';
import Category from '@/models/category';

export default async function (req, res) {
  await dbConnect()
  const { method } = req

  switch (method) {
    case 'GET':
      const categories = await Category.find({});
      // console.log(categories);
      res.status(200).json(categories)
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