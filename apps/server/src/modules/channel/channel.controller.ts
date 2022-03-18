import {
  GetChannelsResult,
  GetChannelResult,
  GetClosedChannelsResult,
  getChannel,
  getChannels,
  openChannel,
  closeChannel,
  getClosedChannels,
  OpenChannelArgs,
  OpenChannelResult,
  CloseChannelResult,
  CloseChannelArgs,
} from 'lightning';
import { SetRequired } from 'type-fest';
import lnd from '../../core/lnd';
import ErrorHelpers from '../../utils/error-handler';

const queryChannels = async (): Promise<GetChannelsResult> => {
  try {
    const result = await getChannels({ lnd });
    const filtered = result.channels.filter(({ is_active }) => is_active);

    return {
      channels: filtered,
    };
  } catch (error) {
    return ErrorHelpers.handleErrors(error);
  }
};

const queryChannel = (id: string): Promise<GetChannelResult> => {
  try {
    return getChannel({ lnd, id });
  } catch (error) {
    return ErrorHelpers.handleErrors(error);
  }
};

const queryClosedChannels = (): Promise<GetClosedChannelsResult> => {
  try {
    return getClosedChannels({ lnd });
  } catch (error) {
    return ErrorHelpers.handleErrors(error);
  }
};

const mutationOpenChannel = (args: Omit<OpenChannelArgs, 'lnd'>): Promise<OpenChannelResult> => {
  try {
    return openChannel({ lnd, ...args });
  } catch (error) {
    return ErrorHelpers.handleErrors(error);
  }
};

const mutationCloseChannel = (args: SetRequired<Pick<CloseChannelArgs, 'id'>, 'id'>): Promise<CloseChannelResult> => {
  try {
    return closeChannel({ lnd, ...args });
  } catch (error) {
    return ErrorHelpers.handleErrors(error);
  }
};

const ChannelsController = { queryChannels, queryChannel, queryClosedChannels, mutationOpenChannel, mutationCloseChannel };

export default ChannelsController;
