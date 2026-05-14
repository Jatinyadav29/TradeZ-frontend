import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Layout from "./Components/Layouts/Layout";
import AppLayout from "./Components/Layouts/AppLayout";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Trades from "./Pages/Trades";
import Market from "./Pages/Market";

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in/*",
    element: (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
        </div>
      </div>
    ),
  },
  {
    path: "/sign-up/*",
    element: (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        </div>
      </div>
    ),
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "trades", element: <Trades /> },
      { path: "market", element: <Market /> },
    ],
  },
]);

const App = () => {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-emerald-500 font-mono">
        Error: Missing VITE_CLERK_PUBLISHABLE_KEY
      </div>
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#10b981",
          colorBackground: "#0a0a0a",
          colorInputBackground: "#111111",
          colorInputText: "white",
          colorText: "#d1d5db",
          colorTextSecondary: "#6b7280",
          borderRadius: "1rem",
        },
        elements: {
          card: "border border-white/5 shadow-2xl shadow-emerald-900/10",
          formButtonPrimary:
            "bg-emerald-500 hover:bg-emerald-400 text-black font-bold",
          footerActionLink: "text-emerald-400 hover:text-emerald-300",
        },
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  );
};

export default App;
