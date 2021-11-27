import { dbConnect } from '@/utils/dbConnect';
import Order from '@/models/order';

export default async function (req, res) {
  await dbConnect()
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'GET':
      Order.find({ finish: false })
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err))
      break
    case 'POST':
      const newModel = new Order(req.body);
      newModel.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newModel);
      });
      break
    case 'PUT':
      // response = 'ok'
      // response = await Order.findById(id);
      // console.log(response);
      res.status(200).json('response')
      break
    case 'DELETE':
      // response = 'ok'
      // response = await Order.findById(id);
      // console.log(response);
      res.status(200).json('response')
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}