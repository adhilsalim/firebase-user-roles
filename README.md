# Firebase User Roles

This command-line interface (CLI) allows you to easily add/rewrite user roles in your Firebase project. 

**Description:**

With `firebase-user-roles`, you can assign specific roles to Firebase users directly from your terminal.

**Installation:**

```bash
npm install firebase-admin
```

**Setup:**

1. **Create a service account:**

   You'll need a service account credential with the Firebase Admin SDK permissions to manage users. Follow the official guide to create a service account and download the credentials file: [https://firebase.google.com/support/guides/service-accounts](https://firebase.google.com/support/guides/service-accounts)

2. **Place the credential file:**

   copy the credentials and paste it in PRIVATE_KEY.json

**Usage:**

1. **Navigate to the script directory:**

   ```bash
   cd src
   ```

2. **Run the script:**

   ```bash
   node .
   ```
   OR
   ```bash
   node index.js
   ```

   **(The script will prompt you for further details)**

**Requirements:**

* **Firebase Project:** Ensure you have a Firebase project set up.
* **Service Account Credential:** A service account with the Firebase Admin SDK permissions is required.

**Notes:**

* This is a basic CLI tool and might require further configuration based on your specific needs.
* Make sure to keep your service account credentials secure.

**Contribution:**

We welcome contributions to improve this CLI tool! Feel free to open an issue or submit a pull request on this repository.
