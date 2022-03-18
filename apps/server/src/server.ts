import 'reflect-metadata';
import { ApolloServerPluginLandingPageGraphQLPlayground as Playground } from 'apollo-server-core';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';

import express from 'express';
import { createSchema } from './schema';
import config from './config';
import logger from './config/logger';
import { ApolloLogs } from './config/logger/apollo-logger';
import { initSubscriptions } from './core/subscriptions';

const main = async () => {
  try {
    const app = express();

    await createConnection(config.typeorm);

    const httpServer = createServer(app);

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      plugins: [Playground({ settings: { 'request.credentials': 'include' } }), ApolloLogs],
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    httpServer.listen(config.APP_PORT, () => {
      initSubscriptions();
      logger.info(`Server running on port ${config.APP_PORT}`);
    });
  } catch (error) {
    console.error(error);
    logger.error(error);
  }
};

main();
