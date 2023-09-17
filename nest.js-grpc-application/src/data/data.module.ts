import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Document } from './entities/document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Document])
  ],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule { }
