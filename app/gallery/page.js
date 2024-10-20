import React from "react";
import Gallery from "./GalleryClient";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

function page() {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default page;
