import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { AppCacheModule } from '../cache/cache.module';
import { CacheService } from '../cache/cache.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventModel } from './models/event.model';

@Module({
  imports: [AppCacheModule, SequelizeModule.forFeature([EventModel])],
  controllers: [EventsController],
  providers: [EventsService, CacheService],
})
export class EventsModule {}
