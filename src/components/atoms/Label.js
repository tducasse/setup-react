import React from "react";

const Label = props => {
  const { name } = props;
  return <label htmlFor={name}>{name}</label>;
};

export default Label;
