import React, { useEffect, useState } from "react";

import { InputContainer } from "./styles";

function TextInput({
  placeholder,
  type,
  title,
  setRegisterData,
  registerData,
  dataname,
}) {
  return (
    <InputContainer>
      <label>{title}</label>
      <input
        required
        type={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) =>
          setRegisterData({ ...registerData, [dataname]: e.target.value })
        }
      />
    </InputContainer>
  );
}

export default TextInput;
