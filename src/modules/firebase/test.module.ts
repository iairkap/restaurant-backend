import { Module } from '@nestjs/common';
import { AuthController } from './firebase.controller';
import { FirebaseService } from './firebase.service';

@Module({
  controllers: [AuthController],
  providers: [FirebaseService],
})
export class TestModule {}
