import { useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['gabriel', 'matheus', 'wigny']);

  function addToList() {
    setList(state => [...state, newItem]);
  }

  return (
    <>
      <input
        type="text"
        placeholder='Novo item'
        onChange={event => setNewItem(event.target.value)}
        value={newItem}
      />

      <button onClick={addToList} >add</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
