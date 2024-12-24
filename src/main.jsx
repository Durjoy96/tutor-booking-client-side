import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./private/PrivateRoute";
import AddTutorials from "./pages/AddTutorials/AddTutorials";
import MyTutorials from "./pages/MyTutorials/MyTutorials";
import FindTutor from "./pages/FindTutor/FindTutor";
import TutorDetails from "./pages/TutorDetails/TutorDetails";
import BookedTutors from "./pages/BookedTutors/BookedTutors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoute>
            <AddTutorials></AddTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/find-tutors",
        element: <FindTutor />,
        loader: () => fetch("http://localhost:5000/tutorials"),
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tutor/${params.details}`),
      },
      {
        path: "/my-booked-tutors",
        element: (
          <PrivateRoute>
            <BookedTutors />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
