import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import ChannelController from './channel.controller';
import { GetChannelsResponse, GetChannelResponse, OpenChannelInput, OpenChannelResponse, CloseChannelResponse, ClosedChannelsResponse } from './channel.types';

@Resolver()
export default class ChannelsResolver {
  @Query(() => GetChannelsResponse)
  getChannels(): Promise<GetChannelsResponse> {
    return ChannelController.queryChannels();
  }

  @Query(() => ClosedChannelsResponse)
  getClosedChannels(): Promise<ClosedChannelsResponse> {
    return ChannelController.queryClosedChannels();
  }

  @Query(() => GetChannelResponse)
  getChannel(@Arg('channelId', () => String) channelId: string): Promise<GetChannelResponse> {
    return ChannelController.queryChannel(channelId);
  }

  @Mutation(() => OpenChannelResponse)
  openChannel(@Arg('args', () => OpenChannelInput) args: OpenChannelInput): Promise<OpenChannelResponse> {
    return ChannelController.mutationOpenChannel(args);
  }

  @Mutation(() => CloseChannelResponse)
  closeChannel(@Arg('channelId', () => String) channelId: string): Promise<CloseChannelResponse> {
    return ChannelController.mutationCloseChannel({ id: channelId });
  }
}
