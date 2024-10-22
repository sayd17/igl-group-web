"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import localFont from "next/font/local";
import "./globals.css";
import { ContextProvider } from "./context/contextProvider";
import { useEffect } from "react";
import BootstrapClient from "@/components/BootstrapClient.js";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import "animate.css";
import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import { GalleryContextProvider } from "./context/galleryContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  // Enforce Limit
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);

  useEffect(() => {
    function openNav() {
      document.getElementById("myNav").style.height = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.height = "0%";
    }
  }, []);

  return (
    <html lang="en">
      <Head></Head>
      <body className={`${geistSans.variable} geistMono.variable} mt-5 pt-4`}>
        <GalleryContextProvider>
          <ContextProvider>{children}</ContextProvider>
        </GalleryContextProvider>

        <BootstrapClient />

        <Toaster
          position="top-center"
          reverseOrder={true}
          gutter={8}
          containerClassName=""
          containerStyle={{ top: 140 }}
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              width: "20%",
              fontWeight: "bold",
            },
          }}
        />
        <script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
      </body>
    </html>
  );
}
