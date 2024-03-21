import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import myContext from '../../context/data/myContext'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Teack'
import Testimonial from '../../components/testimonial/Testimonial'


const Home = () => {




  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home