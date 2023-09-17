import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'APP_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'app',
          protoPath: join(__dirname, './../proto/app.proto'),
        },
      },
    ]),
  ],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}
