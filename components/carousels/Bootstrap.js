//carousels/Bootstrap.js
import { useState } from "react";
import { items } from "../../public/assets/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

export default function BootstrapCarousel() {
  const items = [
    {
      id: 2,
      title: "City Views",
      body: "Bootstrap Carousel Example",
      imageUrl:
        "https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 3,
      title: "Wild Life",
      body: "Bootstrap Carousel Example",
      imageUrl:
        "https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 4,
      title: "Foods and Culture",
      body: "Bootstrap Carousel Example",
      imageUrl:
        "https://images.unsplash.com/photo-1646385890665-09e99c472d3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items?.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            {/* <p>{item.body}</p> */}
            {/* <button className="btn btn-danger">Visit Docs</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
