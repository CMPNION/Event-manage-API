import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.BULL_HOST || 'localhost',
        port: Number(process.env.BULL_PORT) || 6397,
      },
    }),
    BullModule.registerQueue({
        name: 'EventNotification'
    })
  ],
})
export class QueueModule {}
