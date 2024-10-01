import React from 'react'
import DetailPage from '../../components/detailPage'
import BestSellerAndFeatured from '../../components/common/bestSellerAndFeatured'
import BigDelivery from '../../components/common/bigDelivery'

const ProductPage = () => {
  return (
    <div>
    
      <DetailPage/>
      <BestSellerAndFeatured title='You may also like'/>
      <BigDelivery/>
      
    </div>
  )
}

export default ProductPage