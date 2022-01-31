import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoasterService } from './roaster.service';
import { RoastersController } from './roaster.controller';
import { RoasterSchema } from './schemas/roaster.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forFeature([{ name: 'Roaster', schema: RoasterSchema}])],
  controllers: [RoastersController],
  providers: [RoasterService],
  exports: [RoasterService]
})

export class RoastersModule {}
