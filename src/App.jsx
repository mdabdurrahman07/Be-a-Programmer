import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useState } from 'react'
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
     <div className='my-3'>
    <Main AllCards={AllCards}></Main>
     </div>
   
    </>
  )
}

export default App
