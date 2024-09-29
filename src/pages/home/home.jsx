import React from 'react'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import Hero from '../../components/home/hero'
import Delivery from '../../components/home/delivery'
import Category from '../../components/home/category'
import BestSellerAndFeatured from '../../components/common/bestSellerAndFeatured'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Delivery/>
    <Category/>
    <BestSellerAndFeatured title="Featured Products"/>
    <BestSellerAndFeatured title="Bestseller"/>
    <BestSellerAndFeatured title="Discount Products"/>
    <Footer />
   
    </>
  )
}

export default HomePage