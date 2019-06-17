import React from "react";
import Label from "components/atoms/Label";
import Input from "components/atoms/Input";

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
