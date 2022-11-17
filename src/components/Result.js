import React from "react";
import { useSelector } from "react-redux";
import { selectToUnits, selectResult } from "./convertSlice";

const Result = () => {
  const result = useSelector(selectResult);
  const toUnits = useSelector(selectToUnits);
  return (
    <div className="ui container">
      <div className="ui center aligned placeholder segment">
        <h1> {`${result} ${toUnits.fullName}`} </h1>
      </div>
    </div>
  );
};

export default Result;
