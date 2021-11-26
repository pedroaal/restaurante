// import { dbConnect } from '@/utils/dbConnect';
// import Model from '@/models/model';

// export default async function (req, res) {
//   await dbConnect()
//   const { method } = req
//   const { id } = req.query

//   switch (method) {
//     case 'GET':
//       const response = await Model.findById(id);
//       res.status(200).json(response)
//       break
//     case 'POST':
//       const newModel = new Model(req.body);
//       newModel.save(err => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).send(newModel);
//       });
//       break
//     case 'PUT':
//       // response = 'ok'
//       // response = await Order.findById(id);
//       // console.log(response);
//       res.status(200).json('response')
//       break
//     case 'DELETE':
//       // response = 'ok'
//       // response = await Order.findById(id);
//       // console.log(response);
//       res.status(200).json('response')
//       break
//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
//       res.status(405).end(`Method ${method} Not Allowed`)
//   }
// }