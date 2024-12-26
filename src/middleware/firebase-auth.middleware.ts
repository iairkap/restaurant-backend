import { Injectable, NestMiddleware } from '@nestjs/common';
import { FirebaseAuthService } from '../auth/firebase-auth.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.__session; // El nombre de la cookie de Firebase

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const user = await this.firebaseAuthService.verifyToken(token);
      req.user = user; // Almacenar la información del usuario en la request
      next();
    } catch (error) {
      console.error('Error verifying token:', error);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
