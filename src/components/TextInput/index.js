import React, { useEffect, useState } from "react";

import { InputContainer } from "./styles";

function TextInput({ placeholder, type, title, setData, Data, dataname }) {
  return (
    <InputContainer>
      <label>{title}</label>
      <input
        required
        type={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) => setData({ ...Data, [dataname]: e.target.value })}
      />
    </InputContainer>
  );
}

export default TextInput;
