import { useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from './data/db.js'

function App() {
  //asi de manera local
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    //if true retorna indice, si no -1
    const itemExists = cart.findIndex(temp => temp.id == item.id)
    // returns the index of the first element in an array that satisfies the provided

    if (itemExists >= 0) {//existe en el carrito
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
      //agrega una propiedad nueva -> quantity
    } else {
      item.quantity = 1;
      console.log('No existe');
      //agrega item al state de cart
      setCart([...cart, item])
    }
  }

  return (
    <>
      <Header
        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          )
          )}


        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
