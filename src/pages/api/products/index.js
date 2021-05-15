import createHandler from '@/middleware';
import Product from '@/models/product';

const handler = createHandler();

handler.get(async (req, res) => {
  const products = await Product.find([]).exec();
  res.status(200).json(products);
})

export default handler;