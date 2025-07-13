import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ArticleGrid from '../components/ArticleGrid'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <ArticleGrid />
        <SubscribeSection />
        <Footer />
    </div>
  )
}

export default Home