import React from 'react'
import Header from './components/header/Header'
import Why from './components/why/Why'
import Features from './components/features/Features'
import Bento from './components/bento/Bento'
import Pricing from './components/pricing/Pricing'
import CTA from './components/cta/CTA'
import BlogGrid from './components/blog grid/BlogGrid'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Why/>
      <Features/>
      <Bento/>
      <BlogGrid/>
      <Pricing/>
      {/* <CTA/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
