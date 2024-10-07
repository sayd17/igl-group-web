import { useEffect, useState } from "react";
import styles from "./styles/Cart.module.css"; // Import the CSS module
import SistersConcernService from "@/app/api/services/SistersConcernService";
import Link from "next/link";

export default function SistersConcern() {
  const [items, setItems] = useState(null);

  console.log(items);

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
    <div className={styles.container}>
      <h2></h2>
      <div className={styles.cart}>
        {items?.map((item) => (
          <div className={styles["cart-item"]} key={item.id}>
            {/* <img src={item.img} alt={item.name} /> */}
            <div className={styles["item-details"]}>
              <h3>{item.name}</h3>
              <p className={styles.short_description}>
                {item.short_description}
              </p>
              <a href="#" className={styles["read-more"]}>
                {">"}Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
