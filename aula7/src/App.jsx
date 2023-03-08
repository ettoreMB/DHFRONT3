import { useState } from 'react'
import Item from './Item'

function App() {
  const [item, setItem] = useState([])

  function handleAddItem() {
    setItem((prev) => [...prev, item.length + 1])
  }

  return (
    <>
      <button type='button' onClick={handleAddItem}>Adicionar item</button>
      <ul>
        {item.map((i) => (
          <Item key={Math.random()} numero={i}/>
        ))}
      </ul>
    </>
  )
}

export default App

// Thiago Dorea, Ettore Muniz, Alan Menezes, Wadgner Morais