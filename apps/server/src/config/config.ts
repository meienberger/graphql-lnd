import * as dotenv from 'dotenv';
import lnService from 'lightning';
import redis from 'redis';
import { createConnection } from 'typeorm';
import ForwardEntity from '../modules/forward/forward.entity';
import { __prod__ } from './constants/constants';

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  dotenv.config();
} else {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
}

const {
  NODE_ENV = 'development',
  APP_PORT = 3000,
  LOGS_FOLDER = 'logs',
  LOGS_APP = 'app.log',
  LOGS_ERROR = 'error.log',
  APP_LND_IP = '',
  APP_LND_PORT = '',
  TLS_CERT = '',
  ADMIN_MACAROON = '',
  POSTGRES_IP = '10.21.21.4',
  POSTGRES_PORT = 5432,
  POSTGRES_DBNAME = '',
  POSTGRES_USERNAME = '',
  POSTGRES_PASSWORD = '',
  REDIS_IP = '',
  REDIS_PORT = 6379,
  TELEGRAM_API_TOKEN = '',
  TELEGRAM_CHAT_ID = '',
} = process.env;

interface IConfig {
  NODE_ENV: string;
  APP_PORT: number;
  forceStart: boolean;
  logs: {
    LOGS_FOLDER: string;
    LOGS_APP: string;
    LOGS_ERROR: string;
  };
  lnd: lnService.LndAuthenticationWithMacaroon;
  typeorm: Parameters<typeof createConnection>[0];
  redis: Parameters<typeof redis.createClient>[0];
  telegram?: {
    token: string;
    chatId: number;
  };
}

const config: IConfig = {
  NODE_ENV,
  APP_PORT: Number(APP_PORT),
  forceStart: true,
  logs: {
    LOGS_FOLDER,
    LOGS_APP,
    LOGS_ERROR,
  },
  lnd: {
    socket: `${APP_LND_IP}:${APP_LND_PORT}`,
    cert: TLS_CERT,
    macaroon: ADMIN_MACAROON,
  },
  typeorm: {
    type: 'postgres',
    host: POSTGRES_IP,
    database: POSTGRES_DBNAME,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
    logging: !__prod__,
    synchronize: true,
    entities: [ForwardEntity],
  },
  redis: {
    url: `redis://${REDIS_IP}:${REDIS_PORT}`,
  },
};

if (TELEGRAM_API_TOKEN) {
  config.telegram = {
    token: TELEGRAM_API_TOKEN,
    chatId: Number(TELEGRAM_CHAT_ID),
  };
}

export default config;
