import styles from './styles.module.css'

export function Card({cidade}) {
  return (
    <div className={styles.Container} style={{background:cidade.color}}> 
      <span>estado: {cidade.id}</span>
      <span>estado: {cidade.country}</span>
      <span>cidade: {cidade.city}</span>
      <span>população: {cidade.population}</span>
    </div>
  )
}