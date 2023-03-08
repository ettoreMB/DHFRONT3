export default function Item(props) {
  return (
    <li>NOME: {props.item.nome} Idade: {props.item.idade} Pokemon: {props.item.pokemon}</li>
  )
}