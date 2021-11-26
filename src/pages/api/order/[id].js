import { dbConnect } from '@/utils/dbConnect';
import Order from '@/models/order';

export default async function (req, res) {
  await dbConnect()
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'GET':
      const response = await Order.findById(id);
      res.status(200).json(response)
      break
    // case 'POST':
    //   const newModel = new Order(req.body);
    //   console.log(newModel)
    //   newModel.save(err => {
    //     if (err) return res.status(500).send(err);
    //     return res.status(200).send(newModel);
    //   });
    //   break
    case 'PUT':
      Order.findByIdAndUpdate(id, req.body, { new: true }, (err, order) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(order)
      });
      break
    case 'DELETE':
      await Order.findByIdAndRemove(id, (err, order) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(order)
      });
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}