import React from 'react';
import c from './Admin.module.scss'
import {NavLink} from "react-router-dom";

function Admin() {
  return (
    <div className={c.container}>
      <NavLink to={'/admin/add'}>
        Добавить ученика
      </NavLink>
      <NavLink to={'/admin/all'}>
        Все ученики
      </NavLink>
    </div>
  );
}

export default Admin;