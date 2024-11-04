import React from "react";
import Gallery from "./GalleryClient";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GalleryContextProvider } from "../context/galleryContext";
import AlbumService from "../api/services/AlbumService";

export const metadata = {
  title: {
    absolute: "Gallery images",
  },
  description: "It will show all the albums",
};

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
