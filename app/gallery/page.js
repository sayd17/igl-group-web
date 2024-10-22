import React from "react";
import Gallery from "./GalleryClient";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GalleryContextProvider } from "../context/galleryContext";

function page() {
  return (
    <div>
      <Header />
      <GalleryContextProvider>
        <Gallery />
      </GalleryContextProvider>
      <Footer />
    </div>
  );
}

export default page;
