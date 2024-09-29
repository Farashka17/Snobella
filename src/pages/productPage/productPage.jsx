import React from 'react'
import DetailPage from '../../components/detailPage'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import BestSellerAndFeatured from '../../components/common/bestSellerAndFeatured'
import BigDelivery from '../../components/common/bigDelivery'

const ProductPage = () => {
  return (
    <div>
      <Header/>
      <DetailPage/>

      <BestSellerAndFeatured title='You may also like'/>
      <BigDelivery/>
      <Footer/>
    </div>
  )
}

export default ProductPage