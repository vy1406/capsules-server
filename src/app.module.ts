import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './teams/teams.module';
import { RoastersModule } from './roasters/roaster.module';

@Module({
  imports: [
    AuthModule,
    TeamsModule,
    UsersModule,
    RoastersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
