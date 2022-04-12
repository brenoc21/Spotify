import React from "react";

import { RadioInputContainer, RadioBtn } from "./styles";

function RadioInput({ title, options }) {
  return (
    <RadioInputContainer>
      <label>{title}</label>
      <div className="items-container">
        {options.map((option) => {
          return (
            <label className="radioLabel" key={option} htmlFor={option}>
              <RadioBtn className="teste">
                <input
                  name={title}
                  id={option}
                  type="radio"
                  value={option}
                  required
                  // onChange={(e) => setFormContent(e.target.value)}
                />
                <span className="checkmark"></span>
              </RadioBtn>
              {option}
            </label>
          );
        })}
      </div>
    </RadioInputContainer>
  );
}

export default RadioInput;
