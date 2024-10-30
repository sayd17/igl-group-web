import React from "react";
import TeamClient from "./TeamClient";
import { ContextProvider } from "../context/contextProvider";
import Header from "@/components/header/Header";

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
