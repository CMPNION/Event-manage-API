import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventModel } from './models/event.model';
import { IEvent } from 'src/interfaces/Event.interface';
import { CacheService } from '../cache/cache.service';
import { CacheKey } from '@nestjs/cache-manager';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventModel)
    private readonly eventModel: typeof EventModel,
    private readonly cacheService: CacheService,
  ) {}

  async getByUid(uid: string): Promise<IEvent | null> {
    const cacheKey = 'event:${uid}';

    let data = await this.cacheService.get(cacheKey);

    if (!data) {
      data = await this.eventModel.findOne({ where: { uid } });

      if (data) {
        await this.cacheService.save(cacheKey, data, 300);
      }
    }

    return (data as IEvent) || null;
  }

  async getAll(): Promise<IEvent[] | null> {
    const cacheKey = 'all-events'
    let data = await this.cacheService.get(cacheKey)
    if(!data){
        data = await this.eventModel.findAll({ where: { allowed: true } });
        
        if(data){
            await this.cacheService.save(cacheKey, data, 300)
        }
    }
    return (data as IEvent[]) || null
  }

  async delete(uid: string): Promise<number> {
    const data = await this.eventModel.destroy({ where: { uid: uid } });
    if(data){
        await this.cacheService.clear()
    }
    return data
  }

  async getPendings(): Promise<IEvent[]> {
    return this.eventModel.findAll({ where: { allowed: false } });
  }

  async allowEvent(uid: string) {
    var event = this.eventModel.findOne({ where: { uid } });

    
  }
}
