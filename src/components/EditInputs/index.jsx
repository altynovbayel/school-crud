import React from "react";
import c from './EditInputs.module.scss'

function EditInputs({text, type, placeholder,setState}) {
  return (
    <>
      <div className={c.input}>
        <p>{text}</p>
        <input type={type} placeholder={placeholder} onChange={ e => setState(e.target.value)}/>
      </div>
    </>
  );
}

export default EditInputs