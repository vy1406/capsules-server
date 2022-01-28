import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TeamSchema } from './schemas/team.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema}])],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TeamsService]
})

export class TeamsModule {}
