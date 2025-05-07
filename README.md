# Climbing Pass Marketplace App

A mobile application for buying and selling unused climbing gym passes, built with React Native and Expo.

## Features (Planned)

- User authentication (email, phone, Google, Apple)
- Create, edit, and delete pass listings
- Browse listings by gym name and price
- Chat system for communication between buyers and sellers
- User dashboard with active listings and past sales/purchases
- Push notifications for messages and listing updates
- Reporting and moderation system

## Tech Stack

- **Frontend**: React Native (via Expo)
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context + useReducer
- **Notifications**: Expo Notifications + Firebase Cloud Messaging
- **Deployment**: Expo EAS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo Go app on your mobile device

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/pass-marketplace.git
   cd pass-marketplace
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npx expo start
   ```

4. Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal.

## Project Structure

The project is organized as follows:

- `App.js` - Main application component with navigation setup
- `assets/` - Contains images and other static assets
- `components/` - Reusable UI components
- `screens/` - App screens
- `navigation/` - Navigation configuration
- `services/` - Firebase and other service integrations
- `context/` - React Context for state management
- `hooks/` - Custom React hooks
- `utils/` - Utility functions

## Firebase Configuration

To connect to Firebase, create a `.env` file in the root directory with your Firebase configuration:

```
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
FIREBASE_APP_ID=your-app-id
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
