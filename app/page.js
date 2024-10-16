"use client";

import Link from "next/link";
import axiosApi from "./api/axios-common";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BootstrapCarousel from "../components/carousels/Bootstrap";
import styles from "./page.module.css";
import LogoSlider from "@/components/carousels/LogoSlider";
import SistersConcern from "@/components/SistersConcern";
import SistersConcernService from "./api/services/SistersConcernService";
import { useStateContext } from "./context/contextProvider";
import { ContextProvider } from "./context/contextProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const router = useRouter();
  const [items, setItems] = useState(null);
  const { currentSister, setCurrentSister } = useStateContext();

  useEffect(() => {
    SistersConcernService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setItems(customArray);
      })
      .catch((err) => {
        console.log("sisters-concern api error", err);
      });
  }, []);

  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>

      <BootstrapCarousel />

      <div className={styles.sistersConcern}>Our Sisters Concern</div>

      <SistersConcern />

      <LogoSlider />

      <Footer />
    </>
  );
}
