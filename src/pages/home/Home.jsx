import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import myContext from '../../context/data/myContext'


const Home = () => {




  return (
    <Layout>
      <HeroSection/>
    </Layout>
  )
}

export default Home