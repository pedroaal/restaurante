import {dbConnect} from '@/util/dbConnect';
import User from '@/models/user';

export default async function(req, res) {
  await dbConnect()
  const {firstName, lastName, email, password} = req.body;
  const user = new User({
    // ci: ,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    // phone: ,
    // movil: ,
    // address: ,
    // genre: ,
    // birthday: ,
    // isAdmin: ,
    // role_id: ,
    // store_id: ,
  });

  await user.save((err, result) => {
    if(err) {
      console.log(err);
      return res.status(400).json(err);
    } else {
      // console.log(result);
      return res.status(200).json(result);
    }
  });
}