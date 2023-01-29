/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '../app/app.module';

export class BootstrapApp {
  app: INestApplication;

  async start() {
    this.app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    this.app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3334;
    await this.app.listen(port);
    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  }

  async stop() {
    this.app.close();
    Logger.log(`🚀 Application was kill`);
  }
}
