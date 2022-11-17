import React from "react";

const Header = ({ title }) => {
  return (
    <div className="ui center aligned placeholder segment">
      <div className="ui text container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
