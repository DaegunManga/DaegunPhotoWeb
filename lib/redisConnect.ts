import Redis from 'ioredis';

export const redisConnect = new Redis({
  host: process.env.REDIS_HOST,
});
