# Go Live Checklist: Firebase Integration

This project is currently running in **"Mock Mode"** (Demo Mode). This allows you to test the Admin UI and experience the app without any backend setup. 

To make the data persistent and enable real SMS OTP login for your mom, follow these steps to integrate Google Firebase.

## 1. Create a Firebase Project
1.  Go to [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add project"** and name it `dhrubotara`.
3.  Disable Google Analytics (not needed for this simple site) and Create Project.

## 2. Enable Authentication (OTP Login)
1.  In your new project dashboard, go to **Build** -> **Authentication**.
2.  Click **"Get started"**.
3.  Select **"Phone"** from the Sign-in providers list.
4.  **Enable** it.
5.  (Optional) Add your phone number and Mom's phone number to "Phone numbers for testing" with a fixed OTP (e.g., `123456`) if you want to avoid using your free SMS quota during testing.

## 3. Enable Database (Firestore)
1.  Go to **Build** -> **Firestore Database**.
2.  Click **"Create database"**.
3.  Select **"Start in production mode"** (we will set rules later).
4.  Choose a location near you (e.g., `asia-south1` for Mumbai/India).
5.  Click **"Enable"**.

**Set Security Rules:**
Go to the **Rules** tab in Firestore and replace the content with this to allow only authenticated users (Mom) to write, but everyone to read:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read, admin write for Products
    match /products/{product} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // Allow public read, admin write for Testimonials
    match /testimonials/{testimonial} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 4. Enable Storage (Images)
1.  Go to **Build** -> **Storage**.
2.  Click **"Get started"**.
3.  Start in **production mode**.
4.  Click **"Done"**.

**Set Security Rules:**
Go to the **Rules** tab in Storage and use similar rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 5. Connect App to Firebase
1.  In Project Overview, click the **Web icon** (`</>`) to add a web app.
2.  Name it `dhrubotara-web`.
3.  **Copy the `firebaseConfig` object** (you only need the keys).
4.  Create a file named `.env` in the root of your project (same level as `package.json`).
5.  Paste the keys in this format:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=dhrubotara-....firebaseapp.com
VITE_FIREBASE_PROJECT_ID=dhrubotara-...
VITE_FIREBASE_STORAGE_BUCKET=dhrubotara-....appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=1:...
```

## 6. Authorize Admin Numbers
1.  Open `src/context/AuthContext.tsx`.
2.  Update the `AUTHORIZED_NUMBERS` array with your actual admin phone numbers (must include country code, e.g., `+91...`).

```typescript
const AUTHORIZED_NUMBERS = [
  '+919876543210', // Mom's Number
  '+919999999999'  // Your Number
];
```

## 7. Deploy & CORS (Important!)
1.  If you deploy this site (e.g., to Vercel/Netlify), you must add your domain (e.g., `dhrubotara.com`) to the **Authorized Domains** list in Firebase Authentication settings.

---
**Done!** Restart your development server (`bun dev`). The "Demo Mode" banner will disappear, and the app is now live with real data.
