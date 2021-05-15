import dbConnection from '@/util/dbConnect';
import User from '@/models/user';
import {dbConnect, jsonify } from '@/util/dbConnect';

export default async function(req, res) {
  await dbConnect()
  const {email, password} = req.body;
  const user = new User({
    ci: '1719953281',
    firstName: 'Pedro',
    lastName: 'Altamirano',
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
  console.log(user);
  const response = await user.save(function (err) {
    if (err) console.log(err);
  });

  return res.status(200).json('ok');
}