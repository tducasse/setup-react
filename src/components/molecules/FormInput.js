import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const FormInput = props => {
  const { name, value, onChange } = props;
  return (
    <>
      <Label name={name}></Label>
      <Input name={name} value={value} onChange={onChange}></Input>
    </>
  );
};

export default FormInput;
