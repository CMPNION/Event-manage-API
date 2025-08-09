import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventModel } from './models/event.model';
import { IEvent } from 'src/interfaces/Event.interface';
import { CacheService } from '../cache/cache.service';
import { IMessage } from 'src/interfaces/ErrorResponse.interface';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventModel)
    private readonly eventModel: typeof EventModel,
    private readonly cacheService: CacheService,
  ) {}

  async getByUid(uid: string): Promise<IEvent | IMessage> {
    const cacheKey = 'event:${uid}';

    let data = await this.cacheService.get(cacheKey);

    if (!data) {
      data = await this.eventModel.findOne({ where: { uid } });

      if (data) {
        await this.cacheService.save(cacheKey, data, 300);
      } else {
        return { message: `There is no event with uid: ${uid}` };
      }
    }

    return (data as IEvent) || null;
  }

  async getAll(): Promise<IEvent[] | IMessage> {
    const cacheKey = 'all-events';
    let data = await this.cacheService.get(cacheKey);
    if (!data) {
      data = await this.eventModel.findAll({ where: { allowed: true } });

      if (data) {
        await this.cacheService.save(cacheKey, data, 300);
      }
    }
    return data as IEvent[];
  }

  async delete(uid: string): Promise<IMessage> {
    const data = await this.eventModel.destroy({ where: { uid: uid } });
    if (data) {
      await this.cacheService.clear();
    }
    return { message: `Event with uid: ${uid} succesfully deleted` };
  }

  async getPendings(): Promise<IEvent[]> {
    return this.eventModel.findAll({ where: { allowed: false } });
  }

  async allowEvent(uid: string): Promise<IEvent | IMessage> {
    let event = await this.eventModel.findOne({ where: { uid } });
    if (!event) {
      return { message: `There is no event with uid: ${uid}` };
    }
    event.allowed = true;

    await event.save;
    return event;
  }
}
