import { dbConnect } from '@/utils/dbConnect';
import User from '@/models/user';
import argon2 from "argon2";

export default async function (req, res) {
  await dbConnect()
  const { firstName, lastName, email, password } = req.body;
  const hash = await argon2.hash(password);
  const user = new User({
    // ci: ,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hash,
    // phone: ,
    // movil: ,
    // address: ,
    // genre: ,
    // birthday: ,
    // isAdmin: ,
    // role_id: ,
    // store_id: ,
  });

  user.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err));
}