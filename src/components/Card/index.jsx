import React from 'react';
import c from './Card.module.scss'
import {AiFillDelete} from "react-icons/ai";
import {BiEditAlt} from 'react-icons/bi'
import {useAuth} from "../../providers/useAuth";
import {Api} from "../../config/api";
import EditModalWindow from "../EditModalWindow";

function Card({name, lastName, age, group, grade, url, id, get, data}) {
  const {users} = useAuth()
  const [isOpen, setIsOpen ] = React.useState(false)
  
  return (
    <div className={c.card}>
      <div className={c.card_content}>
        <div className={c.header}>
          <img src={url} alt="" />
        </div>
        <div className={c.main}>
          <div className={c.name}>
            <h3>{name}</h3>
            <h3>{lastName}</h3>
          </div>
          <p className={c.age}>
            Возраст: {age}
          </p>
          <div className={c.schoolInfo}>
            <p>Группа: {group.toUpperCase()}</p>
            <p>Класс: {grade}</p>
          </div>
          <div className={c.editBtn}>
            <BiEditAlt onClick={() => {
              setIsOpen(prev => !prev)
            }}/>
            {
              isOpen && <EditModalWindow setIsOpen={setIsOpen} data={data} getBase={get} studentsId={id}/>
            }
            <AiFillDelete onClick={() => {
              Api.deleteStudents(users.id, id).then(res => res && get())
            } }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;