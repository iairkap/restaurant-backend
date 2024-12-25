const admin = require('firebase-admin');

// Inicializa Firebase si no está inicializado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://argentinatech-5a056-default-rtdb.firebaseio.com',
  });
}

// Este sería el Custom Token que obtuviste de alguna fuente, por ejemplo, desde el frontend
const customToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczNTA4NDQ4NCwiZXhwIjoxNzM1MDg4MDg0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay00bHltcUBhcmdlbnRpbmF0ZWNoLTVhMDU2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstNGx5bXFAYXJnZW50aW5hdGVjaC01YTA1Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6InRlc3QtdXNlciJ9.lKGd2OPAD224pzwi81Q4aWePeyA2usvAOBT8mzPNvtBgKHp7vyQDAFTCoR8WyTGM1_XEjZU-XalY9NCe15ft9uNdMeXKY55NsUeg6ahrZ9lgP3j4p9L0KwcVmkBfreQsUHzY3v79fklDbJDD2osD28P21nbSWWfiaXS9XEx00Jbo91EXQWkvgNv_RED6h_XsY85r5fUuOuyJfnI7acqupu8lshH8IFJiQjBlGPtRHtIPCo4vjlvYvgcRf43LFbd4GqKiyNZr154dWk9r0Dw1cysV_2vcG0HBh_JeTP7d-V5cqE9DAj5otLhzoODxw4UrZwHKChJp-CEGWOXt0PqYkw';

// Verificamos el Custom Token usando el método adecuado
admin
  .auth()
  .verifyIdToken(customToken) // Aquí estamos verificando el ID Token
  .then((decodedToken) => {
    console.log('Token Decodificado:', decodedToken);
    // Puedes enviar la respuesta a tu backend con el token decodificado si es necesario
  })
  .catch((error) => {
    console.error('Error al verificar el token:', error);
  });
