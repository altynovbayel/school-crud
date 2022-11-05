import React from 'react';
import {Api} from "../../../../config/api";
import {useAuth} from "../../../../providers/useAuth";
import Card from "../../../../components/Card";
import c from './Main.module.scss'
import Sort from "../../../../components/Sort";
import {Link} from "react-router-dom";


function Main() {
  const [data,setData] = React.useState(null)
  const [base,setBase] = React.useState(null)
  const {users} = useAuth()
  
  function getData(){
    Api.getStudents(users.id).then(res => {
      const base = Object.entries(res?.data).map(([id, item]) => {
        return{
          id,
          ...item,
        }
      })
      setData(base)
      setBase(base)
    })
  }
  
  React.useEffect(() => {
    getData()
  },[users.id])
  
  if(!data) return <h1 style={{textAlign: 'center'}}>loading...</h1>
  if (data.length === 0) return <div><Link to={'/admin/add'}>Добавить ученика</Link></div>
  return (
    <div className={c.container}>
      <Sort base={base} setData={setData}/>
      <div className={c.row_card}>
        {
          data?.map((item, id) => {
            return(
              <Card key={id} {...item} get={getData} data={data}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Main;