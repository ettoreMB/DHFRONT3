import './styles.css'

export default function Card(props) {
  return (
    <div className='cardContainer'>
      <img src={props.card.imgUrl} alt="" />
      <span className="title">{props.card.title}</span>
      <span className="description">{props.card.description}</span>
    </div>
  )
}