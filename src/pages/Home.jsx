import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
    </>
  )
}

export default Home