const admin = require('firebase-admin');
const serviceAccount = require('../firebase/PRIVATE_KEY.json');
const readline = require('readline');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the user ID: ', (uid) => {
    rl.question('Enter the custom claim (in JSON format): ', (customClaim) => {
      try {
        customClaim = JSON.parse(customClaim);
      } catch (e) {
        console.error('Error parsing custom claim:', e);
        rl.close();
        return;
      }
      admin.auth().setCustomUserClaims(uid, customClaim)
        .then(() => {
          console.log('Custom claims set successfully!');
          rl.close();
        })
        .catch(error => {
          console.error('Error setting custom claims:', error);
          rl.close();
        });
    });
  });
  