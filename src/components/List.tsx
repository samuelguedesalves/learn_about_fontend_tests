import { useEffect, useState } from 'react'

type ListProps = {
  initialItems: string[];
}

const List: React.FC<ListProps> = ({ initialItems }) => {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState<string[]>(initialItems);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500)
  }

  function removeToList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(i => i !== item));
    }, 500)
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
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeToList(item)} >Remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List;
