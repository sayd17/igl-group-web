import React from "react";
import TeamClient from "./TeamClient";
import { ContextProvider } from "../context/contextProvider";
import Header from "@/components/header/Header";

export const metadata = {
  title: {
    absolute: "All the teams",
  },
  description: "know about our dynamic team",
};

function page() {
  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>
      <TeamClient />
    </>
  );
}

export default page;
