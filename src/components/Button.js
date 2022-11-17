import React from "react";
import { useDispatch } from "react-redux";
import { setResult } from "./convertSlice";

const Button = (props) => {
  const dispatch = useDispatch();
  const { cta, icon } = props;

  const handleClick = () => {
    dispatch(setResult());
  };
  return (
    <button onClick={handleClick} className="ui primary huge button">
      <i className={`${icon} icon`}></i>
      {cta}
    </button>
  );
};

export default Button;
