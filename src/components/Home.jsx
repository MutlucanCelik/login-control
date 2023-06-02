import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { state } = useLocation();

  return (
    <div className="h3">
      Hoşgeldin <span className="text-warning">{state.email}</span>
    </div>
  );
}
