import React from 'react';
import c from './Sort.module.scss'
import {categoryOptions, listPlaceholder} from "../../utils";

function Sort({setData, base,}) {
  const [inputData, setInputData] = React.useState('')
  const [category, setCategory] = React.useState(null)
  React.useEffect(() => setCategory('name'), [])
  
  React.useEffect(() => {
    const filteredArr = base.filter(item => {
      if(category === 'name') {
        return  item.name.toLowerCase().includes(inputData.toLowerCase())
      } else if(category === 'group') {
        return  item.group.toUpperCase().includes(inputData.toUpperCase())
      } else if(category === 'age'){
        return  item.age.toLowerCase().includes(inputData.toLowerCase())
      } else if(category === 'grade'){
        return  item.grade.toLowerCase().includes(inputData.toLowerCase())
      }
    })
    filteredArr.length > 0 ? setData(filteredArr) : setData(base)
    
  }, [inputData])
  
  
  return (
    <div className={c.sort}>
      <div className={c.sort_input}>
        <input
          className={c.input}
          type="text"
          value={inputData}
          placeholder={`Поиск по ${listPlaceholder[category]}`}
          onChange={e => setInputData(e.target.value)}
        />
      </div>
      <div className={c.category}>
        <select
          className={c.select}
          onChange={event => setCategory(event.target.value)}
        >
          {
            categoryOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default Sort;