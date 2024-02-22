import { useState } from 'react'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import NavBar from './assets/components/NavBar/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  )
  
    
}

export default App
