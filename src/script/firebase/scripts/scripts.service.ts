import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseScriptsService {
  async generateTestToken() {
    const uid = 'test-user';

    try {
      const customToken = await admin.auth().createCustomToken(uid);

      return customToken;
    } catch (error) {
      console.error('Error generando el token JWT:', error);
      throw error;
    }
  }
}
