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
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/Home/Categories/CategoryPage";

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
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-tutors/:category",
        element: <CategoryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
      <Toaster position="top-right" />
    </AuthProvider>
  </StrictMode>
);
