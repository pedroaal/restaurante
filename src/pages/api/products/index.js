import { dbConnect } from '@/utils/dbConnect';
import Product from '@/models/product';

export default async function (req, res) {
  await dbConnect()
  const { method } = req

  switch (method) {
    case 'GET':
      await Product.find().limit(20)
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