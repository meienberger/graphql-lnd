import fs from 'fs';
import path from 'path';
import { createLogger, format, transports } from 'winston';
import TelegramLogger, { FormatOptions } from 'winston-telegram';
import config from '..';

const { align, printf, timestamp, combine, colorize } = format;

// Create the logs directory if it does not exist
if (!fs.existsSync(config.logs.LOGS_FOLDER)) {
  fs.mkdirSync(config.logs.LOGS_FOLDER);
}

/**
 * Production logger format
 */
const combinedLogFormat = combine(
  timestamp(),
  printf(info => `${info.timestamp} > ${info.message}`),
);

/**
 * Development logger format
 */
const combinedLogFormatDev = combine(
  colorize(),
  align(),
  printf(info => `${info.level}: ${info.message}`),
);

const Logger = createLogger({
  level: 'info',
  format: combinedLogFormat,
  transports: [
    //
    // - Write to all logs with level `info` and below to `app.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({
      filename: path.join(config.logs.LOGS_FOLDER, config.logs.LOGS_ERROR),
      level: 'error',
    }),
    new transports.File({
      filename: path.join(config.logs.LOGS_FOLDER, config.logs.LOGS_APP),
    }),
  ],
  exceptionHandlers: [new transports.File({ filename: path.join(config.logs.LOGS_FOLDER, config.logs.LOGS_ERROR) })],
});

//
// If we're not in production then log to the `console
//
const LoggerDev = createLogger({
  level: 'debug',
  format: combinedLogFormatDev,
  transports: [
    new transports.Console({
      level: 'debug',
    }),
  ],
});

const telegramLogger = createLogger({
  level: 'info',
  transports: [],
});

const telegramFormat = (options: FormatOptions) => {
  return options.message;
};

if (config.telegram) {
  telegramLogger.add(
    new TelegramLogger({
      parseMode: 'MarkdownV2',
      token: config.telegram.token,
      chatId: config.telegram.chatId,
      formatMessage: telegramFormat,
      handleExceptions: true,
    }),
  );
}

export { telegramLogger };
export default config.NODE_ENV === 'production' ? Logger : LoggerDev;
