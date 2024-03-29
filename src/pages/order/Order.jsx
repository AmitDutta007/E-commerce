import  Layout  from '../../components/layout/Layout'

const Order = () => {


  const user= JSON.parse(localStorage.getItem('user'));

  console.log('This is order page '+ user.user.email)

  return (
    <Layout><p>Email:{user.user.email}</p></Layout>
  )
}

export default Order