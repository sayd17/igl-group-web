import React from "react";
import TeamClient from "./TeamClient";
import { useStateContext, ContextProvider } from "../context/contextProvider";
import Header from "@/components/header/Header";

function page() {
  return (
    <div>
      <ContextProvider>
        <Header />
      </ContextProvider>
      <TeamClient />
    </div>
  );
}

export default page;
