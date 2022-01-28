import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoasterService } from './roaster.service';
import { RoastersController } from './roaster.controller';
import { RoasterSchema } from './schemas/roaster.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Roaster', schema: RoasterSchema}])],
  controllers: [RoastersController],
  providers: [RoasterService],
  exports: [RoasterService]
})

export class RoastersModule {}
