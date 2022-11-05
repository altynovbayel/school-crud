import React from 'react';
import c from './ModalWindow.module.scss'
import {Api} from "../../config/api";
import {useAuth} from "../../providers/useAuth";
import {RiCloseLine} from "react-icons/ri";
import LimitationInput from "../LimitationInput";
import EditInputs from "../EditInputs";

function EditModalWindow({studentsId, data, setIsOpen, getBase}) {
  const {users} = useAuth()
  const [photo, setPhoto] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [lastName, setLastName] = React.useState(null)
  const [age, setAge] = React.useState(null)
  const [group, setGroup] = React.useState(null)
  const [grade, setGrade] = React.useState(null)
  
  const singleProduct = data.filter(item => item.id === studentsId).map(item => {
    return  {
      ...item,
      url: photo ? photo : item.url,
      name: name ? name : item.name,
      lastName: lastName ? lastName : item.lastName,
      age: age ? age : item.age,
      group: group ? group : item.group,
      grade: grade ? grade : item.grade,
    }
  })
  
  function editInfo() {
    Api.editStudents(users.id, studentsId, singleProduct[0]).then(r => r && getBase())
    setIsOpen(false)
  }
  return (
    <React.Fragment>
      <div className={c.darkBG} onClick={() => setIsOpen(false)}/>
      <div className={c.centered}>
        <div className={c.modal}>
          <div className={c.modalHeader}>
            <h5 className={c.heading}>Изменение</h5>
          </div>
          <button className={c.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{marginBottom: "-3px"}}/>
          </button>
          <div className={c.modalContent}>
            <form>
              <EditInputs type={'text'} text={'Photo'} placeholder={'Url img'} setState={setPhoto}/>
              <EditInputs type={'text'} text={'Имя'} placeholder={'Имя'} setState={setName}/>
              <EditInputs type={'text'} text={'Фамилия'} placeholder={'Фамилия'} setState={setLastName}/>
              <EditInputs type={'text'} text={'Группа (A,B,C,D)'} placeholder={'Группа'} setState={setGroup}/>
              <EditInputs type={'number'} text={'Возраст'} placeholder={'Возраст ребенка'} setState={setAge}/>
              <LimitationInput type={'number'} text={'Класс (1-11)'} placeholder={'1-11'} setState={setGrade} min={1} max={11}/>
            </form>
          </div>
          <div className={c.modalActions}>
            <div className={c.actionsContainer}>
              <button
                className={c.editBtn}
                onClick={editInfo}
              >
                Изменить
              </button>
              <button
                className={c.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div/>
    </React.Fragment>
  );
}

export default EditModalWindow;