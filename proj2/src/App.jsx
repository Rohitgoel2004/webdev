import { useState } from 'react'




function App() {
  
  const [length, setLength] = useState('8')
  const [numbers, setNumbers] = useState('true')
  const [characters, setCharacters] = useState('true')


  return (
    <>
      <div className='bg-blue-600 , h-40 , text-center ,displa '>PASSWORD GENERATOR </div>
    </>
   
  )
}

export default App
