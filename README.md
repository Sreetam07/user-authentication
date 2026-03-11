# React Native Authentication App (Expo)

## Overview

This project is a **React Native Authentication Application built with Expo and TypeScript**.
It implements a simple authentication flow using **React Context API** to manage global authentication state.

The application includes:

- Login
- Signup
- Home screen
- Authentication state management
- Form validation
- Password visibility toggle
- Persistent user storage using AsyncStorage

---

# Features

## Authentication Flow

- Signup with **Name, Email, and Password**
- Login with **Email and Password**
- Logout functionality
- Global authentication state using **React Context API**

---

## Form Validation

The app validates user inputs before submitting.

### Login Validation

- Invalid email format
- Password length less than 6 characters
- Incorrect credentials

### Signup Validation

- Missing fields
- Invalid email format
- Password must be at least **6 characters**

---

## Password Visibility Toggle

Both Login and Signup screens include an **eye icon** to toggle password visibility.

Users can:

- Show password
- Hide password

---

## Persistent Authentication (AsyncStorage)

User information is stored using **AsyncStorage** so that the authentication state persists when the app is restarted.

Storage is handled through a separate **storage service layer**.

---

## Navigation

Navigation is implemented using **React Navigation (Native Stack Navigator)**.

Screens included:

- Login Screen
- Signup Screen
- Home Screen

Navigation flow:

Login → Signup → Home

Authenticated users are redirected directly to the **Home Screen**.

---

# Installation and Setup

## 1. Clone the repository

```
git clone https://github.com/Sreetam07/user-authentication.git
cd user-authentication

```

---

## 2. Install dependencies

```
npm install
```

---

## 3. Start the Expo development server

```
npx expo start
```

---

## 4. Run the application

### Android

Press:

```
a
```

### iOS

Press:

```
i
```

---

# Environment Requirements

- Node.js
- Expo CLI
- Android Studio (for Android)
- Xcode (for iOS)

---
