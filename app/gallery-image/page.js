import React from "react";
import GalleryImageClient from "./Client";
import { GalleryContextProvider } from "../context/galleryContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AlbumService from "../api/services/AlbumService";

export const metadata = {
  title: {
    absolute: "Gallery images",
  },
  description: "it will show specific album images",
};

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
