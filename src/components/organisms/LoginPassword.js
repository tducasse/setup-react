import React, { useState } from "react";
import FormInput from "components/molecules/FormInput";

const LoginPassword = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  return (
    <>
      <FormInput
        name="login"
        value={login}
        onChange={e => setLogin(e.target.value)}
      ></FormInput>
      <FormInput
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></FormInput>
    </>
  );
};

export default LoginPassword;
