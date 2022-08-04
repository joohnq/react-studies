import React from "react";
import { Header } from "../../components/Header";
import { Count } from "../../components/Count";

export function Home() {
  return (
    <div>
      <Header
      name="Home"
      links={["Shop", "Home", "More...", "Contact", "Salve"]}
    />
    <Count />
    </div>
  );
}
