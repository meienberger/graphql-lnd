import { Resolver, Arg, Mutation } from 'type-graphql';
import PaymentController from './payment.controller';
import { RebalanceResponse } from './payment.types';

@Resolver()
class PaymentResolver {
  @Mutation(() => RebalanceResponse)
  rebalance(@Arg('tokens', () => Number) tokens: number, @Arg('destination', () => String) destination: string, @Arg('outPeer', () => String) outPeer: string): Promise<RebalanceResponse> {
    return PaymentController.mutationRebalance(tokens, destination, outPeer);
  }
}

export default PaymentResolver;
