import React from "react";
import GalleryImageClient from "./Client";
import { GalleryContextProvider } from "../context/galleryContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

function page() {
  return (
    <div>
      <Header />
      <GalleryContextProvider>
        <GalleryImageClient />
      </GalleryContextProvider>
      <Footer />
    </div>
  );
}

export default page;
