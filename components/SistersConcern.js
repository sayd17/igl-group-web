"use client";
import { useEffect, useState } from "react";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useRouter } from "next/navigation";
import { fixedSizeString } from "@/helpers/helpers";
import styles from "./styles/Sisters.module.css";
import { useStateContext } from "@/app/context/contextProvider";

export default function SistersConcern() {
  const [items, setItems] = useState(null);
  const router = useRouter();
  const { setCurrentSister } = useStateContext();

  const handle = (item) => {
    setCurrentSister(item);
    router.push(`/sisters-concern/${item?.id}`);
  };

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
    <div className="mt-5 content-wrapper">
      <h2></h2>
      <div className="row justify-content-center">
        {items?.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card mb-4">
              <img
                src={item.logo}
                alt={item.name}
                className="card-img-top"
                height="300px"
              />
              <div className="card-body">
                <h3 className="card-title">{fixedSizeString(item.name, 12)}</h3>
                <p className="card-text">
                  {fixedSizeString(item.short_description, 30)}
                </p>
                <button
                  onClick={() => handle(item)}
                  className={`border-0 btn btn-danger ${styles.buttonAnimated} my-2`}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
