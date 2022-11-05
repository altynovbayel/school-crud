import React from 'react';
import c from './AddStudents.module.scss'
import cls from '../../../../../components/FormInputs/FormInputs.module.scss'
import {useForm} from "react-hook-form";
import {Api} from "../../../../../config/api";
import {useAuth} from "../../../../../providers/useAuth";
import FormInput from "../../../../../components/FormInputs";
import LimitationInput from "../../../../../components/LimitationInput";

function AddStudents() {
  const {users} = useAuth()
  
  const {
    register,
    reset,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm({
    mode: 'onBlur'
  })
  
  
  function postInfo(data){
    Api.postStudents(data, users.id).then()
    reset()
  }
  return (
    <div className={c.container}>
      <form className={c.form} onSubmit={handleSubmit(postInfo)}>
        <div className={c.all_inputs}>
          <div className={c.form_inputs}>
            <FormInput
              inputText={'Photo'}
              inputType={'text'}
              placeholder={'Url img'}
              register={register}
              registerName={'url'}
              errors={errors.url}
            />
            <FormInput
              inputText={'Имя'}
              inputType={'text'}
              placeholder={'Имя'}
              register={register}
              registerName={'name'}
              errors={errors.name}
            />
            <FormInput
              inputText={'Фамилия'}
              inputType={'text'}
              placeholder={'Фамилия'}
              register={register}
              registerName={'lastName'}
              errors={errors.lastName}
            />
            <FormInput
              inputText={'Группа (A,B,C,D)'}
              inputType={'text'}
              placeholder={'Группа'}
              register={register}
              registerName={'group'}
              errors={errors.group}
            />
            <FormInput
              inputText={'Возраст'}
              inputType={'number'}
              placeholder={'Возраст ребенка'}
              register={register}
              registerName={'age'}
              errors={errors.age}
            />
            {/*Range limitation*/}
            <div className={cls.inputs_block}>
              <div className={cls.label}>
                <label>
                    Класс (1-11)
                </label>
              </div>
              <div className={cls.input}>
                <input
                  className={errors.grade && cls.errorInp}
                  type={"number"}
                  placeholder={'1-11'}
                  {...register('grade', {
                    required: '⚠ Обязательное поле',
                  })}
                  onChange={e => e.target.value > 11
                    ? e.target.value = '11' : e.target.value < 1
                      ? e.target.value = '1' : ''}
                />
                {
                  errors.grade && <span className={cls.error_text}>⚠ Обязательное поле</span>
                }
              </div>
            </div>
          </div>
        </div>
        <div className={c.btn}>
          <button type={"submit"} disabled={!isValid} >Добавить</button>
        </div>
      </form>
    </div>
  );
}




export default AddStudents;