import React from 'react'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Products from './componets/Products'
import Special from './componets/Special'
import Contact from './componets/Contact'
import Place from './componets/Place'

function App() {
  return (
    <div>
     <Header />
     <main className='main'>
      <Hero />
      <Special />
      <Products />
      <Place />
      <Contact />
     </main>
    </div>
  )
}

export default App