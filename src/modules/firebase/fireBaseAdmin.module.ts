import { FirebaseAdminModule } from '@alpha018/nestjs-firebase-auth';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExtractJwt } from 'passport-jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FirebaseAdminModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        base64: configService.get('FIREBASE_SERVICE_ACCOUNT_BASE64'),
        options: {
          apiKey: configService.get('FIREBASE_API_KEY'),
          authDomain: configService.get('FIREBASE_AUTH_DOMAIN'),
          projectId: configService.get('FIREBASE_PROJECT_ID'),
          storageBucket: configService.get('FIREBASE_STORAGE_BUCKET'),
          messagingSenderId: configService.get('FIREBASE_MESSAGING_SENDER_ID'),
          appId: configService.get('FIREBASE_APP_ID'),
          measurementId: configService.get('FIREBASE_MEASUREMENT_ID'),
        },
        auth: {
          config: {
            extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
            checkRevoked: true,
            validateRole: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class FireBaseAdminModule {}
