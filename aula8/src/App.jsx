import { useEffect, useState } from 'react'
import Item from './Item'

function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [pokemon, setPokemon] = useState("")
  const [items, setItem] = useState([])


  function handleNome (event) {
    setNome(event.target.value)
  }

  function handleIdade (event) {
    setIdade(event.target.value)
  }

  function handlePokemon (event) {
    setPokemon(event.target.value)
  }

  function handleSubmit() {
    const item = {
      nome,
      idade,
      pokemon
    }
    setItem((prev) => [...prev, item])
  }
 

  return (
    <>
    <label >Nome completo</label>
    <input type="text" value={nome} onChange={handleNome}/>

    <label >Idade</label>
    <input type="text" value={idade} onChange={handleIdade}/>

    <label >Pokemon Favorito</label>
    <input type="text"value={pokemon} onChange={handlePokemon}/>

      <button type='button' onClick={handleSubmit}>Adicionar item</button>
      <ul>
        {items.map((i) => (
          <Item key={Math.random()} item={i}/>
        ))}
      </ul>
    </>
  )
}

export default App

// Thiago Dorea, Ettore Muniz, Alan Menezes, Wadgner Morais