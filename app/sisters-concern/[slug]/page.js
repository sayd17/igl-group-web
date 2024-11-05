import React from "react";
import SistersConcernClient from "./SistersConcernClient";
import Header from "@/components/header/Header";

export const metadata = {
  title: {
    absolute: "sister companies",
  },
  description: "you will see individual sisters details here",
};

// export async function generateStaticParams() {
//   let sisters;

//   try {
//     const { data } = await SistersConcernService.getAll();
//     const customArray = Object.keys(data).map((key) => data[key]);
//     sisters = customArray;
//   } catch (error) {
//     console.error("Error fetching album data:", error);
//   }

// .then((res) => {
//   const data = res?.data;
//   const customArray = Object.keys(data).map((key) => data[key]);
//   setItems(customArray[0]);
// })
// .catch((err) => {
//   console.log("team error", err);
// });

//   return sisters.map((sister) => ({
//     slug: sister.id,
//   }));
// }

export default async function Page({ params }) {
  const slug = (await params).slug;

  return (
    <div>
      <Header />
      <SistersConcernClient slug={slug} />
    </div>
  );
}
