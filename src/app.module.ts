import { Module } from '@nestjs/common';
import { ConfigHostModule } from './config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { CacheModule } from './modules/cache/cache.module';
import { EventsModule } from './modules/events/events.module';
import { QueueModule } from './modules/queue/queue.module';

@Module({
  imports: [ConfigHostModule, DatabaseModule, CacheModule, EventsModule, QueueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
