import React, { useEffect, useState } from "react";
import { CheckboxInputContainer, CheckboxBtn } from "./styles";
import { BsCheck } from "react-icons/bs";
export default function CheckboxInput({ title, options }) {
  const [checkboxValues, setCheckboxValues] = useState([]);

  function handleClick(e) {
    console.log("checked");
  }
  return (
    <CheckboxInputContainer>
      <label>{title}</label>

      {options.map((option) => {
        return (
          <label className="checkboxLabel" key={option} htmlFor={option}>
            <CheckboxBtn>
              <input
                id={option}
                type="checkbox"
                value={option}
                onChange={(e) => handleClick(e)}
              />
              <BsCheck className="checkmark" />
            </CheckboxBtn>
            {option}
          </label>
        );
      })}
    </CheckboxInputContainer>
  );
}
