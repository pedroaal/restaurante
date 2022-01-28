import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { dbConnect } from '@/utils/dbConnect';
import argon2 from 'argon2';
import User from '@/models/user';

const options = {
  secret: process.env.APP_KEY,
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@email.com" },
        password: {  label: "Contaseña", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({email: credentials.email, status: true}, (err, result) => {
          if (err){ 
            console.log(err);
            return null;
          }
        });

        if(user){
          if(await argon2.verify(user.password, credentials.password)) {
            return user;
          } else {
            console.log('error');
            return null;
          }
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    jwt: true,
    maxAge: 2 * 60 * 60, // 2 horas
  },
  jwt: {
    signingKey: process.env.JWT_KEY,
    encryption: true,
    // encryptionKey: "pedro",
    // decryptionKey: encryptionKey,
  },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    // newUser: '/auth/signup',
  }
}

export default function(req, res) {
  return NextAuth(req, res, options)
}