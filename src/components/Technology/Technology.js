import React from "react";
import "./styles.scss";


const Technology = ({tech}) => {
  return (
    <div className="technology">
      <img src={`./logos/${tech}.svg`} alt={tech} className="technology__img" />
    </div>
  );
};

export default Technology;
