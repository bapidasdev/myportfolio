import React from 'react'
import { About, Footer, Header, Skills,  Work } from './container';

import { Navbar } from './components';
import './app.css'

const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
    
    </div>
  )
}

export default App;
