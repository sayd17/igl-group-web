import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/LogoSlider.module.css"; // Your custom CSS for the slider

const logos = [
  { id: 1, imgSrc: "assets/img/client-logo-1.png", alt: "Logo 1" },
  { id: 2, imgSrc: "assets/img/client-logo-2.png", alt: "Logo 2" },
  { id: 3, imgSrc: "assets/img/client-logo-3.png", alt: "Logo 3" },
  { id: 4, imgSrc: "assets/img/client-logo-4.png", alt: "Logo 4" },
  { id: 5, imgSrc: "assets/img/client-logo-5.png", alt: "Logo 5" },
  { id: 5, imgSrc: "assets/img/client-logo-6.png", alt: "Logo 6" },
];

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5, // Show 5 logos on large desktops
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4, // Show 4 logos on desktops
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 3, // Show 3 logos on tablets
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2, // Show 2 logos on mobile devices
  },
};

export default function LogoSlider() {
  return (
    <div className={styles.logoSliderContainer}>
      <Carousel
        responsive={responsive}
        infinite={true} // Makes the carousel loop infinitely
        autoPlay={true} // Auto play the slider
        autoPlaySpeed={3000} // Set autoplay speed
        keyBoardControl={true} // Allow keyboard controls
        showDots={false} // Hide dots below the carousel
        arrows={false} // Show left and right navigation arrows
      >
        {logos.map((logo) => (
          <div key={logo.id} className={styles.logoItem}>
            <img
              className={styles.logoImage}
              src={logo.imgSrc}
              alt={logo.alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
