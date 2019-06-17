import React from "react";

const Input = props => {
  const { name, value, onChange } = props;
  return <input name={name} value={value} onChange={onChange} />;
};

export default Input;
