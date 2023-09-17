import { Module } from '@nestjs/common';
import { DataModule } from './data/data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './data/entities/category.entity';
import { Document } from './data/entities/document.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'reaper237',
      database: 'test',
      entities: [Category, Document],
      synchronize: true,
    }),
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
