import {
  getRouteThroughHops,
  GetRouteThroughHopsArgs,
  GetRouteThroughHopsResult,
  GetRouteToDestinationArgs,
  GetRouteToDestinationResult,
  getRouteToDestination,
  getIdentity,
  getNetworkGraph,
} from 'lightning';
import { calculatePaths, Path } from 'ln-pathfinding';
import lnd from '../../core/lnd';

const queryRouteThroughHops = async (args: Pick<GetRouteThroughHopsArgs, 'tokens' | 'public_keys' | 'outgoing_channel'>): Promise<GetRouteThroughHopsResult['route']> => {
  const result = await getRouteThroughHops({ lnd, ...args });

  return result.route;
};

const queryRouteToDestination = async (args: Pick<GetRouteToDestinationArgs, 'destination' | 'tokens'>): Promise<GetRouteToDestinationResult['route']> => {
  const result = await getRouteToDestination({ lnd, ...args });

  return result.route;
};

const queryPossiblePaths = async (destination: string, tokens: number): Promise<Path[]> => {
  const { channels } = await getNetworkGraph({ lnd });

  const { public_key: self } = await getIdentity({ lnd });

  const { paths } = calculatePaths({ channels, end: destination, start: self, mtokens: tokens * 1000 });

  return paths || [];
};

export { queryRouteThroughHops, queryRouteToDestination, queryPossiblePaths };
