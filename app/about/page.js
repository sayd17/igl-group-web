import React from "react";
import AboutClient from "./AboutClient";

export const metadata = {
  title: {
    absolute: "About",
  },
  description: "know IGL Group",
};

export default function About() {
  return (
    <div>
      <AboutClient />
    </div>
  );
}
