export default function Card({produto}) {
  
  return (
    <li>
      <h2>{produto.nome}</h2>
      <img src={produto.image} />
      <h3>{produto.preco}</h3>
    </li>
  )
}