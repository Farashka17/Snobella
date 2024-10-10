import React, { useEffect, useState } from 'react'
import Product from './product'
import DescAndRewMenu from './descAndRewMenu'
import Description from './description'
import Rewiev from './rewiev'
import BigDelivery from '../common/bigDelivery'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { productId } = useParams(); // URL-dən məhsul ID-sini al
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async (productId) => {
      try {
        const response = await fetch(`http://localhost:3001/products/:${productId}`); // URL-i öz API strukturuna uyğunlaşdır
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Məhsulu əldə edərkən xətaya düşdü:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Yüklənir...</div>; // Yüklənmə halını idarə et
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col justify-between items-start mx-auto py-[50px] gap-12">
      <Product product={product}/>
      <DescAndRewMenu/>
      <Description/>
      <Rewiev/>
      {/* <BigDelivery/> */}
      </div>
    </div>
  )
}

export default DetailPage