import { dbConnect } from '@/utils/dbConnect';
import Order from '@/models/order';

export default async function (req, res) {
  await dbConnect()
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'GET':
      Order.findById(id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
      break
    // case 'POST':
    //   const newModel = new Order(req.body);
    //   console.log(newModel)
    //   newModel.save()
    //     .then(result => res.status(200).json(result))
    //     .catch(err => res.status(400).json(err));
    //   break
    case 'PUT':
      Order.findByIdAndUpdate(id, req.body, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
      break
    case 'DELETE':
      Order.findByIdAndRemove(id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}