import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as firebaseAdmin from 'firebase-admin';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.__session;

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.user = decodedToken;
        next();
      })
      .catch((error) => {
        console.error('Error verifying token:', error);
        throw new UnauthorizedException('Invalid token');
      });
  }
}
