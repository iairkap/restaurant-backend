import * as admin from 'firebase-admin';

async function generateTestToken() {
  // UID de un usuario de prueba. Puedes usar cualquier identificador único
  const uid = 'test-user';

  try {
    const customToken = await admin.auth().createCustomToken(uid);
    console.log('Token JWT generado:', customToken);
    return customToken;
  } catch (error) {
    console.error('Error generando el token JWT:', error);
    throw error;
  }
}

generateTestToken();
