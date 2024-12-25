import { Controller, Get, Req } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseService } from './firebase.service';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://your-database-url.firebaseio.com',
      });
    }
  }

  @Get('generate-token')
  async generateTestToken() {
    const uid = 'test-user'; // El UID de un usuario de prueba

    try {
      const customToken = await admin.auth().createCustomToken(uid);
      return { token: customToken };
    } catch (error) {
      return { error: 'Error generando el token JWT', details: error.message };
    }
  }

  // Endpoint para verificar el ID Token (que se obtendrá en el frontend)
  @Get('verify-token')
  async verifyToken(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1]; // Obtener el token del encabezado
    if (!token) {
      return { message: 'Token not provided' };
    }

    try {
      // Este método ahora verifica un ID Token, no un Custom Token
      const decodedToken = await this.firebaseService.verifyToken(token);
      return { message: 'Token is valid', decodedToken };
    } catch (error) {
      return { message: 'Token is invalid', error: error.message };
    }
  }
}
