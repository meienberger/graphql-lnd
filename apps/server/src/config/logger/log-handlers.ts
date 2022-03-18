import { getChannels } from 'lightning';
import { Logger } from 'winston';
import lnd from '../../core/lnd';
import Forward from '../../modules/forward/forward.entity';

const logForwardEvent = async (forward: Forward, logger: Logger) => {
  try {
    if (!forward.is_send && !forward.is_receive && forward.tokens) {
      const { channels } = await getChannels({ lnd });

      const inChannel = channels.find(channel => channel.id === forward.in_channel)?.partner_public_key;
      const outChannel = channels.find(channel => channel.id === forward.out_channel)?.partner_public_key;

      let title = '✅ *New Forward event*';
      let failure = '';

      if (forward.is_failed) {
        title = '❌ *Failed Forward event*';
        failure = `\n*Failure*: ${forward.internal_failure?.replace(/_/gu, ' ')}`;
      }

      const message = `${title}\n*In Channel*: ${inChannel?.slice(0, 8)}\n*Out Channel*: ${outChannel?.slice(0, 8)}\n*Tokens*: ${forward.tokens?.toLocaleString(
        'en-EN',
      )}\n*Fee*: ${forward.fee?.toLocaleString('en-EN')}${failure}`;

      logger.info(message);
    }
  } catch (error) {
    console.error(error);
  }
};

export { logForwardEvent };
