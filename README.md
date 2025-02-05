# Titly - Online Tutor Booking Platform

## Project Overview

Titly is an online tutor booking platform that connects users with tutors across various languages and subjects. It offers an easy-to-use interface for finding, reviewing, and booking tutors, making learning accessible and convenient for everyone.

### Live Project Link

You can check out the live project here: [Titly - Tutor Booking](https://tutor-booking-cadf2.web.app/)

## Technologies Used

- **React**: To build the frontend UI components.
- **Vite**: For a faster development experience and optimized builds.
- **Axios**: For making HTTP requests to the backend API.
- **TailwindCSS**: For styling and implementing a responsive design.
- **DaisyUI**: For styling and implementing a responsive design.
- **Firebase**: For Authentication (Firebase Authentication), and real-time database.
- **React-Router-Dom**: For navigation and routing.
- **React-Icons**: To enhance the UI with scalable vector icons.
- **Lottie-React**: For displaying Lottie animations.
- **React-Hot-Toast**: For displaying notifications and alerts.
- **React-Tooltip**: For creating interactive tooltips.
- **React-CountUp**: For creating animated number counters.
- **SweetAlert2**: For displaying styled alert modals.

---

## Core Features

- **Authentication System**: Secure login and registration system using Firebase Authentication.
- **Authorization**: JWT for protected routes to ensure secure access.
- **Dynamic User Experience**: Users can add, delete, and update tutorials easily.
- **Responsive Design**: Fully responsive UI that adapts to all screen sizes and devices.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Real-Time Data**: Interactive data updates without the need for page reloads.

---

## Dependencies

Below are the dependencies used in this project:

- `axios`: ^1.7.9
- `firebase`: ^11.1.0
- `lottie-react`: ^2.4.0
- `react`: ^18.3.1
- `react-countup`: ^6.5.3
- `react-dom`: ^18.3.1
- `react-hot-toast`: ^2.4.1
- `react-icons`: ^5.4.0
- `react-router-dom`: ^7.0.1
- `react-tooltip`: ^5.28.0
- `sweetalert2`: ^11.15.3

---

## Step-by-Step Guide to Run the Project Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Durjoy96/tutor-booking-client-side.git
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory of the project and add the following Firebase configuration details:
   ```sh
    VITE_apiKey=YOUR_FIREBASE_API_KEY
    VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_projectId=YOUR_FIREBASE_PROJECT_ID
    VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_appId=YOUR_FIREBASE_APP_ID
  ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open the project in your browser**:
   Visit `http://localhost:3000` to view the application.

---

Feel free to check out the live project and explore the full functionality of Titly. If you have any issues or questions, open an issue or reach out to me!