import './App.css';
import { useEffect, useState } from 'react';
import Product from './components/Product';

function App() {

  const [products, setproducts] = useState([]);
  const [count, setCount] = useState(0);

  // pagination 
  /*  
  count, : loaded
  perPage (size):10
  pages: count/perPage
  currentPage (page)
  */


  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    fetch(`http://localhost:8000/products?page=${page}&size=${size}`)
    .then(res => res.json())
    .then(data => {
      setCount(data.count);
      setproducts(data.result)
    })
  }, [page, size])

  const pages = Math.ceil(count/size);

  const handleCart = (product) => {
    console.log(product.name);
  }

  return (
    <div>
      <div className='flex mx-10'>
      <div className='w-3/4 grid md:grid-cols-3 sm:grid-cols-2 gap-3'>
        {
        products.map(product => <Product key={product._id} product = {product} handleCart={handleCart}></Product>)
      }
      </div>
      <div className='w-1/4'>
        <h1>This section is for calculation</h1>
      </div>
    </div>
    <div className='my-10 flex justify-center items-center'>
      <div className=''>
      {
        [...Array(pages).keys()].map(number => <button onClick={()=>{setPage(number)}} className='p-2 bg-sky-300 mx-2 border px-3' key={number}>{number+1}</button>)
      }
      </div>
      <div className='ml-5 bg-sky-300'>
        <select className='p-2 border px-3 bg-green-400' onChange={event => setSize(event.target.value)}>
        <option value="10">10</option>
        <option value="20" selected>20</option>
        <option value="30">30</option>
        </select>
      </div>
    </div>
    </div>
  );
}

export default App;
