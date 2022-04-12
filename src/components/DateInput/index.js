import React from "react";
import { DateInputBg } from "./styles";

export default function DateInput({
  title,
  setRegisterData,
  registerData,
  dataname,
}) {
  return (
    <DateInputBg>
      <label>{title}</label>
      <input
        id="date"
        type="date"
        onChange={(e) =>
          setRegisterData({ ...registerData, [dataname]: e.target.value })
        }
      ></input>
    </DateInputBg>
  );
}
