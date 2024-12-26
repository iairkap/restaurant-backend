import * as admin from 'firebase-admin';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class FirebaseAuthService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }

  async verifyToken(token: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken;
    } catch (error) {
      console.error('Error verifying token:', error);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
