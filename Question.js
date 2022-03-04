import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {collapse ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
        <p>{collapse ? info : null}</p>
    </article>
  );
};

export default Question;
