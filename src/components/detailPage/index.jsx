import React from 'react'
import Product from './product'
import DescAndRewMenu from './descAndRewMenu'
import Description from './description'
import Rewiev from './rewiev'
import BigDelivery from '../common/bigDelivery'

const DetailPage = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col justify-between items-start mx-auto py-[50px] gap-12">
      <Product/>
      <DescAndRewMenu/>
      <Description/>
      <Rewiev/>
      {/* <BigDelivery/> */}
      </div>
    </div>
  )
}

export default DetailPage