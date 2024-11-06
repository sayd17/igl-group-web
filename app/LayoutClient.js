"use client";
import React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

function LayoutClient() {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  // Enforce Limit
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{ top: 140 }}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            width: "20%",
            fontWeight: "bold",
          },
        }}
      />
    </>
  );
}

export default LayoutClient;
