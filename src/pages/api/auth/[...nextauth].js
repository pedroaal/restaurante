import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import {dbConnect} from '@/util/dbConnect';
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
        console.log('cred', credentials);
        const user = await User.findOne({email: credentials.email}, (err, result) => {
          if (err){ 
            console.log(err);
            return null;
          }
        });
        if(user){
          console.log(user.password);
          if(await argon2.verify(user.password, credentials.password)) {
            return user;
          } else {
            return null;
          }
        }
        return null;
      }
    })
  ],
  session: {
    jwt: true,
    maxAge: 2 * 60 * 60, // 2 horas
  },
  // jwt: {
  //   // signingKey: {"kty":"oct","kid":"Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q","alg":"HS512","k":"K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"},
  //   encryption: true,
  //   // encryptionKey: "",
  //   // decryptionKey = encryptionKey,
  //   // decryptionOptions = {
  //   //    algorithms: ['A256GCM']
  //   // },
  // },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    // newUser: null
  }
}

export default function(req, res) {
  return NextAuth(req, res, options)
}