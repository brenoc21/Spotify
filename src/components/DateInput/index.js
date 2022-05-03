import React from "react";
import { DateInputBg } from "./styles";

export default function DateInput({
  title,
  setData,
  Data,
  dataname,
}) {
  return (
    <DateInputBg>
      <label>{title}</label>
      <input
        id="date"
        type="date"
        onChange={(e) =>
          setData({ ...Data, [dataname]: e.target.value })
        }
      ></input>
    </DateInputBg>
  );
}
