import {dbConnect} from '@/utils/dbConnect';
import Product from '@/models/product';

export default async function(req, res) {
  await dbConnect()
  const {method} = req
  
  switch (method) {
    case 'GET':
      const products = await Product.find().limit(20); //.exec()
      // console.log(categories);
      res.status(200).json(products)
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