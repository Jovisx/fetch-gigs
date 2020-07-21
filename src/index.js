import express from 'express';
import http from 'http';
import cors from 'cors';
import models from './models';
import config from './config';
import { callApiTimerFunc } from './utils/timer';
import {
  ApolloServer,
} from 'apollo-server-express';
import resolvers from './resolvers';
import schema from './schema';

const app = express();

app.use(cors());

// Create Http Server
// const server = http.createServer(app);

// Create Apollo Server with Graphql
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

server.applyMiddleware({app, path: '/graphql'});

models.sequelize.sync()
  .then(async () => {
    console.log('Sequelize synced');

    //Set Timer
    setInterval(callApiTimerFunc, config.interval_time * 60 * 1000);
  }).catch((err) => {
    console.log(`Sequelize sync failed: ${JSON.stringify(err)}`);
  });

app.listen(config.app.port, () => {
  console.log(`Server listening at port ${config.app.port}`);
});
