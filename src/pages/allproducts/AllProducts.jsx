import Filter from "../../components/filter/Filter"
import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/productCard/ProductCard"

const AllProducts = () => {
  return (
    <Layout>
      <Filter />
      <ProductCard/>
    </Layout>
  )
}

export default AllProducts