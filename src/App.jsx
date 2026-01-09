import React from 'react'
import Header from './components/header/Header'
import Why from './components/why/Why'
import Features from './components/features/Features'
import Bento from './components/bento/Bento'
import Pricing from './components/pricing/Pricing'
import CTA from './components/cta/CTA'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Why/>
      <Features/>
      <Bento/>
      <Portfolio/>
      <Pricing/>
      {/* <CTA/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
