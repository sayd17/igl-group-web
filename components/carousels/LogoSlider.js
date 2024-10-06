import { Carousel } from "react-bootstrap";
import styles from "../styles/LogoSlider.module.css"; // Your custom CSS for the slider

const logos = [
  { id: 1, imgSrc: "/logos/logo1.png", alt: "Logo 1" },
  { id: 2, imgSrc: "/logos/logo2.png", alt: "Logo 2" },
  { id: 3, imgSrc: "/logos/logo3.png", alt: "Logo 3" },
  { id: 4, imgSrc: "/logos/logo4.png", alt: "Logo 4" },
  { id: 5, imgSrc: "/logos/logo5.png", alt: "Logo 5" },
];

export default function LogoSlider() {
  return (
    <Carousel
      className={styles.logoSlider}
      interval={2000}
      controls={false}
      indicators={false}
      pause={false}
    >
      {logos.map((logo) => (
        <Carousel.Item key={logo.id} className={styles.carouselItem}>
          <img className={styles.logoImage} src={logo.imgSrc} alt={logo.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
