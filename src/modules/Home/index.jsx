import  { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/ProductCard'
import Stats from '../../components/StatCard'
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'

const Home = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>
  {
    const fetchProducts = async() =>{
    const response=  await fetch('https://fakestoreapi.com/products?limit=12');
    const data = await response.json()
    console.log(data);
    setProducts(data)
    }
    fetchProducts();
  },[])
  return (
    <div>
      <Hero />
      <Categories/>
      <div className='flex flex-col text-center w-full mt-20'>
        <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>Products</h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>Most Popular Products</h1>

      </div>
      {
        products.length > 0 ?
        <ProductCard products={products} />
        :
        <div>Loading.....</div>
      }
      
      <Products />
       <Stats />
    </div>
  )
}

export default Home