"use client";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import AlbumService from "@/app/api/services/AlbumService";

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  const fetchData = () => {
    AlbumService.getAll()
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
    <div className="content-wrapper mt-1">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {items?.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <img src={item.image} alt="slides" />
            <Carousel.Caption className={styles.caption}>
              <h3>{item.name ? item.name : "IGL Group"}</h3>
              {/* <p>{item.body}</p> */}
              {/* <button className="btn btn-danger">Visit Docs</button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
