import createHandler from '@/middleware';
import Category from '@/models/category';

const handler = createHandler();

handler.get(async (req, res) => {
  const categories = await Category.find([]).exec();
  res.status(200).json(categories);
})

export default handler;