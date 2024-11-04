import ContactForm from "./ContactForm";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AlbumService from "../api/services/AlbumService";

export const metadata = {
  title: {
    absolute: "Contact Us",
  },
  description: "contact us for any query",
};

export default function Fetch() {
  return (
    <div className="">
      <Header />
      <ContactForm />
      {/* <div className="ratio ratio-16x9"> */}
      <div className="content-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1888135355393!2d90.3784708!3d23.740645400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b5c1cbd409%3A0x33ef8cc2e2b3fc6e!2z4KaG4KaH4Kac4Ka_4KaP4KayIOCml-CnjeCmsOCngeCmqg!5e0!3m2!1sbn!2sbd!4v1730521802847!5m2!1sbn!2sbd"
          width="1280"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
