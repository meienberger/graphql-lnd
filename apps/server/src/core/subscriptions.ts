import { subscribeToForwardRequests, subscribeToForwards } from 'lightning';
import logger from '../config/logger';
import { logForwardEvent } from '../config/logger/log-handlers';
import { telegramLogger } from '../config/logger/logger';
import ForwardEntity from '../modules/forward/forward.entity';
import lnd from './lnd';

const handleForwardEvent = async (forward: ForwardEntity) => {
  try {
    logForwardEvent(forward, telegramLogger);

    if (forward.tokens) {
      await ForwardEntity.create(forward).save();
    }
  } catch (error) {
    logger.error(error);
  }
};

const handleForwardRequest = (forward: any) => {
  // Accept all forward requests
  forward.accept();
};

const initSubscriptions = () => {
  try {
    logger.info('Initializing subscriptions');

    const subToForwards = subscribeToForwards({ lnd });
    const subToForwardReqs = subscribeToForwardRequests({ lnd });

    subToForwards.on('forward', forward => handleForwardEvent(forward));
    subToForwardReqs.on('forward_request', forward => handleForwardRequest(forward));
  } catch (error) {
    logger.error(error);
  }
};

export { initSubscriptions };
