import { useState } from "react";
import { Card } from "./Card/Card";

export default function CardRoll(props) {
  const { data, propsClickHandler } = props;
  return (
    <div className="flex-container">
      {data
        ? data.map((ea) => (
            <Card key={ea.id} data={ea} propsClickHandler={propsClickHandler} />
          ))
        : ""}
    </div>
  );
}
