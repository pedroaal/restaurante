import { dbConnect } from '@/utils/dbConnect';
import Product from '@/models/product';

export default async function(req, res) {
  await dbConnect()
  const {method} = req
  const {id} = req.query
  console.log('id: ', id);
  
  switch (method) {
    case 'GET':
      const product = await Product.findById(id);
      res.status(200).json(product)
      break
    case 'POST':
      // Update or create data in your database
      res.status(200).json()
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json()
      break
    case 'DELETE':
      // Update or create data in your database
      res.status(200).json()
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}