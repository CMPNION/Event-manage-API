import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
