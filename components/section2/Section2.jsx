import React from "react";
import Card from "./Card";

function Section2() {
  return (
    <section className="w-full flex-center flex-col py-4 ">
      <h1 className="head_text">Services</h1>
      <div className="flex-center py-4 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Section2;
