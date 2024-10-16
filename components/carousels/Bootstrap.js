"use client";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import GalleryService from "@/app/api/services/GalleryService";

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  console.log(items);

  const fetchData = () => {
    GalleryService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setItems(customArray);
      })
      .catch((err) => {
        console.log("sisters-concern api error", err);
      });
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items?.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.image} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.program ? item.program : "IGL Group"}</h3>
            {/* <p>{item.body}</p> */}
            {/* <button className="btn btn-danger">Visit Docs</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
