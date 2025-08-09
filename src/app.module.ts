import { Module } from '@nestjs/common';
import { ConfigHostModule } from './config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { AppCacheModule } from './modules/cache/cache.module';
import { EventsModule } from './modules/events/events.module';
import { QueueModule } from './modules/queue/queue.module';

@Module({
  imports: [
    ConfigHostModule,
    DatabaseModule,
    AppCacheModule,
    EventsModule,
    QueueModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
