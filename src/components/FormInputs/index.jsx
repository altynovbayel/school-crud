import React from "react";
import c from "./FormInputs.module.scss";

function FormInput(
  {
    inputText,
    inputType,
    placeholder,
    register,
    registerName,
    errors,
  }) {
  
  return (
    <div className={c.inputs_block}>
      <div className={c.label}>
        <label>
          {inputText}
        </label>
      </div>
      <div className={c.input}>
        <input
          className={errors && c.errorInp}
          type={inputType}
          placeholder={placeholder}
          {...register(registerName, {
            required: '⚠ Обязательное поле',
          })}
        />
        {
          errors && <span className={c.error_text}>⚠ Обязательное поле</span>
        }
      </div>
    </div>
  )
}

export default FormInput