import styles from "./styles/Cart.module.css"; // Import the CSS module

export default function Cart() {
  const items = [
    {
      id: 1,
      title: "IGL Web",
      description: "IGL Web is a sisters concern of IGL Group of company",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "IGL Web",
      description: "IGL Web is a sisters concern of IGL Group of company",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "IGL Web",
      description: "IGL Web is a sisters concern of IGL Group of company",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className={styles.container}>
      <h2></h2>
      <div className={styles.cart}>
        {items.map((item) => (
          <div className={styles["cart-item"]} key={item.id}>
            {/* <img src={item.img} alt={item.title} /> */}
            <div className={styles["item-details"]}>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
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
