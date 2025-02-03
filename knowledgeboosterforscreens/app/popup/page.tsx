"use client";
import React, { useRef, useEffect } from "react";

interface PopupProps {
  close: () => void; // Use lowercase boolean for props
  open: boolean;
}

function Popup({ close, open }: PopupProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the modal or button
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        closeRef.current &&
        !closeRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="py-5"
      style={{
        background: "#0000007a",
        width: "100%",
        height: "50%",
        position: "absolute",
        transform: open ? "translateX(0)" : "translateX(100%)", // Corrected translate function
        transition: "transform 0.3s ease-in-out", // Added smooth transition
      }}
      ref={modalRef}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "#0000007a",
          width: "350px",
          height: "400px",
          margin: "0 auto",
        }}
      >
        A {open ? "Open" : "Closed"}
        <button onClick={() => close()} ref={closeRef}>
          close
        </button>
      </div>
    </div>
  );
}

export default Popup;
