import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFromUnits,
  setValue,
  selectFromUnits,
  selectValue,
} from "./convertSlice";

import { measureUnits } from "../api/measureUnits";

const InputUnit = () => {
  const dispatch = useDispatch();

  const currentlySelected = useSelector(selectFromUnits);
  const currentValue = useSelector(selectValue);

  const handleDropdownChange = (option) => {
    dispatch(setFromUnits(option));
    console.log(option);
  };

  const renderedOptions = measureUnits.map((option) => {
    return (
      <div
        key={option.shortHand}
        className="item"
        onClick={() => handleDropdownChange(option)}
      >
        {option.fullName}
      </div>
    );
  });

  return (
    <div className="ui huge fluid right labeled input">
      <input
        type="number"
        placeholder="Input Value"
        value={Number(currentValue)}
        onInput={(event) => dispatch(setValue(event.target.value))}
      />
      <div id="input-unit" className="ui dropdown label">
        <div className="text">{currentlySelected.fullName}</div>
        <i className="dropdown icon"></i>
        <div className="menu">{renderedOptions}</div>
      </div>
    </div>
  );
};

export default InputUnit;
