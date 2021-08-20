import React, {useState} from 'react'

export default function Form() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const addItem = () => {
    if (value.trim() === '') return;
    if (Number(+value)) return;
    setList(prev => [...prev, value]);
    setValue('')
  }
  const removeItem = (indToRemove)=> {
    setList(prev => prev.filter((_, ind) => indToRemove !== ind))
  }
  let items = list.map((item, i) => (
    <li key={i}>
      {item}
      <button onClick={() => removeItem(i)}>X</button>
    </li>
    )
  )
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  />
      <button onClick={addItem}>Create</button>
      <ul>
        {/* {list.map((item, i) => <li key={i}>{item}</li>)} */}
        {items}
      </ul>
    </div>
  )
}
