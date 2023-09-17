import { Module } from '@nestjs/common';
import { join } from 'path';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
