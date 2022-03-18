import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import ChannelResolver from './modules/channel/channel.resolver';
import PaymentResolver from './modules/payment/payment.resolver';
import RoutesResolver from './modules/routes/routes.resolver';

const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [ChannelResolver, RoutesResolver, PaymentResolver],
    validate: true,
  });

export { createSchema };
