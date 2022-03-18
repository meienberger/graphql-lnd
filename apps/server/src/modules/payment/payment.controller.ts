/* eslint-disable max-statements */
import { payViaRoutes, PayViaRoutesResult, createInvoice, getRouteThroughHops, getIdentity, getNetworkGraph } from 'lightning';
import { calculatePaths } from 'ln-pathfinding';
import lnd from '../../core/lnd';

interface IHop {
  public_key: string;
  channel: string;
}

const mutationRebalance = async (tokens: number, destination: string, outPeer: string): Promise<PayViaRoutesResult> => {
  const { channels } = await getNetworkGraph({ lnd });
  const { public_key: self } = await getIdentity({ lnd });

  const { paths } = calculatePaths({ channels, end: destination, start: self, mtokens: tokens * 1000 });

  let hops: IHop[] = [];

  const correctPaths = paths.filter(p => p.hops[0].public_key === outPeer && p.hops[p.hops.length - 1].public_key === destination);

  correctPaths.forEach(p => {
    if (hops.length === 0 || hops.length > p.hops.length) {
      // eslint-disable-next-line prefer-destructuring
      hops = p.hops;
    }
  });

  if (hops.length === 0) {
    throw new Error('No route found');
  }

  const invoice = await createInvoice({ lnd, tokens });

  const { route } = await getRouteThroughHops({
    lnd,
    public_keys: [...hops.map(h => h.public_key), self],
    tokens,
    payment: invoice.payment,
    outgoing_channel: hops[0].channel,
    total_mtokens: invoice.mtokens,
  });

  return payViaRoutes({ lnd, routes: [route], id: invoice.id });
};

const PaymentController = { mutationRebalance };

export default PaymentController;
