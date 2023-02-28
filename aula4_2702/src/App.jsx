
import Card from './components/Card'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

const cards = [
  {title: "Feijoada", description: "Prato principal", imgUrl: "../public/assets/feijoada.png"},
  {title: "Camarão", description: "Frutos do mar", imgUrl: "../public/assets/camarao.png"},
  {title: "Coxinha", description: "salgadinho", imgUrl: "../public/assets/coxinha.png"},
  {title: "Torta de limão", description: "Sobremesa", imgUrl: "../public/assets/torta.png"},
  {title: "Coca Cola", description: "Bebida", imgUrl: "../public/assets/coca.png"},
]

function App() {
  return (
    <>
      <Header />
      <div className='container'>
      <h1>Fast Food Home</h1>
      <div className="cardBox">
        {cards.map((card) => (
          <Card card={card}/>
        ))}
      </div>
    </div>
    <Footer />
    </>
    
      
  )
}

export default App
