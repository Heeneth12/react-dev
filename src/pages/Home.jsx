import React, { useState, useEffect } from 'react'
import NavBar from '../layouts/NavBar'
import Products from '../layouts/Products'
import { Link } from 'react-router-dom';
import Test from './Test';

function Home() {

  const [products, setProducts] = useState([])

  function handleinput(e) {
    console.log(e.target.value);
  }

  console.log("print input");
  useEffect(
    
    () => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log("get data"); 
        setProducts(data);
      })
      .catch(error => console.error(error));
      console.log("connect....")
  },
  []);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Products product={product} />
          </Link>
        ))}
      </div>
      <Test output={handleinput}></Test>
    </>
  )
}
export default Home;