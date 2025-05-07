
# Climbing Pass Marketplace App - Detailed Specification

## Overview
An iOS and Android mobile application where users can **buy and sell unused climbing gym passes**. Designed to support secure listings, browsing by gym and price, and a built-in chat system to facilitate communication between buyers and sellers.

---

## Features & Functional Requirements

### 1. User Authentication
- Sign up / Login via email, phone, or third-party (Google, Apple)
- Password recovery and email verification

### 2. Pass Listings (Selling)
- Create a listing with:
  - Gym name (select from predefined list or add new)
  - Number of passes
  - Expiration date (optional)
  - Price per pass
  - Optional description
- Upload images (e.g., screenshot of the pass)
- Edit or delete listings

### 3. Pass Browsing (Buying)
- Browse listings by:
  - Gym name (filterable)
  - Price (min-max range)
  - Location proximity (optional)
- Save listings to "Favorites"
- View full listing details

### 4. Chat System
- Initiate a chat with the seller from a listing
- Real-time messaging with push notifications
- View message history
- Access all chats from "Messages" tab

### 5. User Dashboard
- View active listings
- View past sales & purchases
- Manage profile (username, photo, gym preferences)

### 6. Reporting & Moderation
- Report inappropriate listings or users
- Admin dashboard (web-based) to review reports and take action

### 7. Notifications
- New message notifications
- Listing status changes
- Alerts when favorite gyms get new passes

---

## Technical Architecture

### Platform
- **Mobile**: iOS & Android
- **Framework**: React Native (via Expo)

### Backend
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication
- **Chat**: Firebase Firestore (chat threads), or optional third-party (e.g., Stream.io)
- **Storage**: Firebase Storage (for images)
- **Functions**: Firebase Cloud Functions (for notifications, listing validation, etc.)

### State Management
- React Context + useReducer (or Zustand for larger state needs)

### Notifications
- Push via Expo Notifications + Firebase Cloud Messaging

### Deployment
- **Expo EAS** for native builds
- Over-the-air (OTA) updates via `expo publish`
- CI/CD pipeline with GitHub + EAS

---

## UI/UX Design Considerations
- Minimalist and clean interface
- Tabs: Home, Search, Sell, Messages, Profile
- Dark and light theme support
- Reusable components for listings and chat UI

---

## Future Enhancements
- In-app payment integration (Stripe)
- Verification system (for users and gyms)
- Ratings and reviews for sellers
- Map-based gym selector
- Multi-language support

---

## Tech Stack Summary
| Area                  | Technology                      |
|-----------------------|----------------------------------|
| Frontend              | React Native + Expo             |
| Auth & Backend        | Firebase Auth + Firestore       |
| Image Storage         | Firebase Storage                |
| Push Notifications    | Expo Notifications + FCM        |
| Build & Deploy        | Expo EAS                        |
| State Management      | React Context / Zustand         |
| Hosting Admin Panel   | Firebase Hosting or Vercel      |

---

## Development Workflow
1. Develop features in Expo Go for fast iteration
2. Push OTA updates for UI/logic fixes
3. Use EAS Build for production APK/IPA
4. Distribute via TestFlight and internal testers
5. Publish to App Store and Play Store
