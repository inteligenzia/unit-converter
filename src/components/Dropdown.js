import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToUnits, selectToUnits } from "./convertSlice";

import { measureUnits } from "../api/measureUnits";

const Dropdown = () => {
  const dispatch = useDispatch();
  const currentlySelected = useSelector(selectToUnits);

  const handleChange = (option) => {
    dispatch(setToUnits(option));
    console.log(option);
  };

  const renderedOptions = measureUnits.map((option) => {
    return (
      <div
        key={option.shortHand}
        className="item"
        onClick={() => handleChange(option)}
      >
        {option.fullName}
      </div>
    );
  });

  return (
    <div className="ui huge fluid compact menu" style={{ boxShadow: "none" }}>
      <div className="ui fluid simple dropdown item">
        {currentlySelected
          ? currentlySelected.fullName
          : "Select Measurment Unit"}
        <i className="right floated dropdown icon"></i>
        <div className="menu">{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Dropdown;
