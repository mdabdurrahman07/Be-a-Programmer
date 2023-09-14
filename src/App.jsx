import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useState } from 'react'
import Cart from './Components/Cart/Cart';

function App() {
      const [AllCards , SetAllCards] = useState([])
      useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => SetAllCards(data))
      },[])
  return (
    <>
     <div className='my-10'>
      <Header></Header>
     </div>
     <div className='my-3 flex justify-evenly'>
     <div> <Main AllCards={AllCards}></Main></div>
      <div><Cart></Cart></div>
     </div>
   
    </>
  )
}

export default App
