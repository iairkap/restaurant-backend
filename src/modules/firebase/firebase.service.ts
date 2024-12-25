import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import * as serviceAccount from '../../../credentials/service-account.json';

@Injectable()
export class FirebaseService {
  constructor() {
    // Inicializa Firebase si no está inicializado
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
        databaseURL: 'https://argentinatech-5a056.firebaseio.com',
      });
    }
  }

  async verifyToken(token: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(token);
  }

  // Otros métodos
}
