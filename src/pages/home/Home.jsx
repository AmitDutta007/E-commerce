import { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import myContext from '../../context/data/myContext'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Teack'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Navigate } from 'react-router-dom'


const Home = () => {


  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }



  return (
    <Layout>
      {/* <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button> */}
      <HeroSection />
      <ProductCard />
      {/* <Track />
      <Testimonial /> */}
    </Layout>
  )
}

export default Home