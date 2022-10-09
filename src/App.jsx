import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Loader from './Components/Loader/Loader'
import Saludo from './Components/Saludo/Saludo'
import Skills from './Components/Skills/Skills'

function App() {
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  

  return (
    

    <div className="App">
      {
      loading ?
      <Loader></Loader>

      :
       <>  
     <Saludo></Saludo>
     <Navbar></Navbar>
     <Header></Header>
     <Skills></Skills>
    
    
     </>
    }
     
    </div>
  )
}

export default App
