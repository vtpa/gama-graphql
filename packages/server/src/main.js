import express from 'express';

import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://127.0.0.1:3000'
  },
  bodyParserConfig: true,
})

// app.use(cors());

// app.get('/status', (_, response) => {
//   response.send({
//     status: 'Vini'
//   });
// });

// app.post('/authenticate', express.json(), (request, response) => {
//   console.log('Email', request.body.email);
//   response.send({ Okay: true });
// });


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});