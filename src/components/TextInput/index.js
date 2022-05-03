import React, { useEffect, useState } from "react";

import { InputContainer } from "./styles";

function TextInput({ placeholder, type, title, setData, Data, dataname, required }) {
  return (
    <InputContainer>
      <label>{title}</label>
      {required 
      ?<input
        required
        type={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) => setData({ ...Data, [dataname]: e.target.value })}
        />
      :<input
        type={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) => setData({ ...Data, [dataname]: e.target.value })}
        />
      }
      
    </InputContainer>
  );
}

export default TextInput;
