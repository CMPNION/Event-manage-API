import { Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('/list')
  async listAll() {
    return this.eventsService.getAll()
  }

  @Get('/:uid')
  async getOne(@Param('uid') uid) {
    return this.eventsService.getByUid(uid)
  }

  @Delete('delete/:uid')
  async deleteOne(@Param('uid') uid) {
    this.eventsService.delete(uid)
  }

  
}
