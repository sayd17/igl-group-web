"use client";
import { useEffect, useState } from "react";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useRouter } from "next/navigation";
import { fixedSizeString } from "@/helpers/helpers";

export default function SistersConcern() {
  const [items, setItems] = useState(null);
  const router = useRouter();

  const handle = (e) => {
    e.preventDefault();
    router.push("/sisters-concern");
  };

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
    <div className="container mt-5">
      <h2></h2>
      <div className="row">
        {items?.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card mb-4">
              <img src={item.logo} alt={item.name} height="150px" />
              <div className="card-body">
                <h3 className="card-title">{fixedSizeString(item.name, 12)}</h3>
                <p className="card-text">{item.short_description}</p>
                <button
                  onClick={handle}
                  className={`styles["read-more"] border-0`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
