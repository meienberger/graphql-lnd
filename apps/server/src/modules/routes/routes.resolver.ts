import { Query, Resolver, Arg } from 'type-graphql';
import { queryRouteThroughHops, queryRouteToDestination, queryPossiblePaths } from './routes.controller';
import { RouteThroughHopsResponse, GetRouteThroughHopsInput, GetRouteToDestinationResponse, GetRouteToDestinationInput, GetPossiblePathsResult } from './routes.types';

@Resolver()
class RoutesResolver {
  @Query(() => RouteThroughHopsResponse)
  getRouteThroughHops(@Arg('args', () => GetRouteThroughHopsInput) args: GetRouteThroughHopsInput): Promise<RouteThroughHopsResponse> {
    return queryRouteThroughHops(args);
  }

  @Query(() => GetRouteToDestinationResponse)
  getRouteToDestination(@Arg('args', () => GetRouteToDestinationInput) args: GetRouteToDestinationInput): Promise<GetRouteToDestinationResponse | undefined> {
    return queryRouteToDestination(args);
  }

  @Query(() => [GetPossiblePathsResult])
  getPossiblePaths(@Arg('destination', () => String) destination: string, @Arg('tokens', () => Number) tokens: number): Promise<GetPossiblePathsResult[]> {
    return queryPossiblePaths(destination, tokens);
  }
}

export default RoutesResolver;
