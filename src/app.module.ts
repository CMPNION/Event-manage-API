import { Module } from '@nestjs/common';
import { ConfigHostModule } from './config/config.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [ConfigHostModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
