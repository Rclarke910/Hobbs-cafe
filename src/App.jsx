import React from 'react'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Special from './componets/Special'

function App() {
  return (
    <div>
     <Header />
     <main className='main'>
      <Hero />
      <Special />
     </main>
    </div>
  )
}

export default App