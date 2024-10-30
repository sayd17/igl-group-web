"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Fetch() {
  return (
    <div className="">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
