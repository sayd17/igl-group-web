import BootstrapCarousel from "../components/carousels/Bootstrap";
import styles from "./page.module.css";
import LogoSlider from "@/components/carousels/LogoSlider";
import SistersConcern from "@/components/SistersConcern";
import { ContextProvider } from "./context/contextProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>

      <BootstrapCarousel />

      <div className={`${styles.sistersConcern} content-wrapper`}>
        Our Sisters Concern
      </div>

      <SistersConcern />

      <div className={`${styles.sistersConcern} content-wrapper`}>
        Our Partners
      </div>

      <LogoSlider />

      <Footer />
    </>
  );
}
