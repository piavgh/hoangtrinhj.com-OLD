---
author: Hoang Trinh
date: 2020-10-05 21:26:00+00:00
layout: post
slug: nestjs-redis-cache
title: Nest.js Caching With Redis
cover: './preview.jpg'
template: post
categories:
- Nest.js
- Redis
tags:
- nest.js
- redis
---

## What is Redis

Caching is a technique that you'll hear about a lot in the world of highly scalable and performance system nowadays.

And when I mention caching, I hope that the first word that pop out of your head is Redis.

Beside caching, Redis is used for some other use cases:

- Pub/Sub
- Queues
- Real-time analysis
- ...

But today, I will only tell you about Redis as a caching solution.

## What is Nest.js

In short, Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.

If you've worked with frameworks such as Laravel, PhalconPHP or Java Spring, you will realize immediately that framework like Express.js is lack of a "frame", or architecture. Different Express.js projects built by different teams will have different structures.

But with Nest.js, you can expect that all teams will share a same architecture.

You can find more information about Nest.js at its official website: [https://docs.nestjs.com](https://docs.nestjs.com)

## How to add Redis into your Nest.js project

If you searched Google for keyword like "nest.js redis", you might see some npm packages like [this one](https://www.npmjs.com/package/nestjs-redis) or some people are even using [this package](https://www.npmjs.com/package/redis) alone.

I don't know why people like to reinvent the wheel, but Nest.js fully supports this.

You can use the official way from Nest.js:

### 1. Create your RedisCacheModule

#### 1.1. `redisCache.module.ts`

```ts
import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheService } from './redisCache.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: configService.get('CACHE_TTL'),
      }),
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService] // This is IMPORTANT,  you need to export RedisCacheService here so that other modules can use it
})
export class RedisCacheModule {}
```

#### 1.2. `redisCache.service.ts`

```ts
import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  async get(key) {
    await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value);
  }
}
```

### 2. Inject RedisCacheModule wherever you need it

Let's just assume we will use it in module `DailyReportModule`:

#### 2.1. `dailyReport.module.ts`:

```ts
import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../cache/redisCache.module';
import { DailyReportService } from './dailyReport.service';

@Module({
  imports: [RedisCacheModule],
  providers: [DailyReportService],
})
export class DailyReportModule {}
```

#### 2.2. `dailyReport.service.ts`

We will use the `redisCacheService` here:

```ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RedisCacheService } from '../cache/redisCache.service';

@Injectable()
export class DailyReportService {
  private readonly logger = new Logger(DailyReportService.name);

  constructor(
    private readonly redisCacheService: RedisCacheService, // REMEMBER TO INJECT THIS
  ) {}

  @Cron('0 1 0 * * *') // Run cron job at 00:01:00 everyday
  async handleCacheDailyReport() {
    this.logger.debug('Handle cache to Redis');
  }
}
```

You can check my sample code [here](https://github.com/piavgh/nestjs-order-management/blob/main/src/cache/redisCache.module.ts).

Happy coding!
