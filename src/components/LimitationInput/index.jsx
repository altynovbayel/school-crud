import React from 'react';
import c from "../EditInputs/EditInputs.module.scss";

function LimitationInput(
  {
    text,
    type,
    placeholder,
    setState,
    max,
    min
  }) {
  return (
    <>
      <div className={c.input}>
        <p>{text}</p>
        <input
          type={type}
          placeholder={placeholder}
          onChange={e => {
            e.target.value > max
              ? e.target.value = max : e.target.value < min
                ? e.target.value = min : setState(e.target.value)
          }}
        />
      </div>
    </>
  );
}

export default LimitationInput;