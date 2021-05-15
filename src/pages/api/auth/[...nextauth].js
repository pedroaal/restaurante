import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import argon2 from 'argon2';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@email.com" },
        password: {  label: "Contaseña", type: "password" }
      },
      async authorize(credentials) {
        credentials.password = await argon2.hash(credentials.password);
        const url = 'user/create';
        axios
          .post(url, credentials)
          .then(res => {
            // console.log(res);
            return res;
          })
          .catch(err => console.log(err));
        // if (user) {
        //   return user;
        // } else {
        //   return null;
        // }
        // return user;
      }
    })
  ],
  session: {
    jwt: true
  }
}

export default function(req, res) {
  return NextAuth(req, res, options)
}