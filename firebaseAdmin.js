var admin = require("firebase-admin");

var serviceAccount = require("./serverkey.json");
if (!admin.apps.length) {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
export { admin }