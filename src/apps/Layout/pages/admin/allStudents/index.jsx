import React from 'react';
import {Api} from "../../../../../config/api";
import {useAuth} from "../../../../../providers/useAuth";
import c from './AllStudents.module.scss'
import Card from "../../../../../components/Card";

function AllStudents() {
  const [data, setData] = React.useState(null)
  const {users} = useAuth()
  
  function getData(){
    Api.getStudents(users.id).then(r => {
      const base = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setData(base)
    })
  }
  React.useEffect(() => {
    getData()
  }, [users.id])
  
  if(!data) return <h1 style={{textAlign: 'center'}}>loading...</h1>
  return (
    <div className={c.container}>
      
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

export default AllStudents;