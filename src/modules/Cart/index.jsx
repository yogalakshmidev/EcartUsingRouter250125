import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useEffect } from 'react';

const Cart = () => {
  const navigate = useNavigate();
  const [total,setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem('cart')) || []

  useEffect(()=>{
  const total = carts.reduce((acc,item)=>{
    return acc +(item.price*item.quantity)
  },0)
  setTotal(total);
},[carts])
const handleInc = (id)=>{
  const updatedCart = carts.map(item=>{
    if(item.id === id){
      return {
        ...item,
        quantity:item.quantity + 1
      }
    }
    return item;
  })
  localStorage.setItem('cart',JSON.stringify(updatedCart))
  navigate('/cart');
}

const handleDec = (id)=>{
  const updatedCart = carts.map(item=>{
    if(item.id === id) {
      if(item.quantity > 0){
        return {
          ...item,
          quantity:item.quantity- 1
        }
      }
      
    }
    return item;
  })
  localStorage.setItem('cart',JSON.stringify(updatedCart))
  navigate('/cart');
}
const removeProduct=(id)=>{
  const updatedCart = carts.filter(item => item.id !== id)
  localStorage.setItem('cart',JSON.stringify(updatedCart))
  navigate('/cart');
}

  if(carts.length === 0) {
  return <div className = 'h-[55vh] flex justify-center items-center text-4xl'>cart is Empty</div>
  
  
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-3xl">{carts.length}items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          {
            carts.map(cart=>{
              return(
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  {/* Product */}
                  <div className="w-20">
                    <img className="h-24" src={cart.image} alt={cart.title}/>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cart.title}</span>
                    <span className="text-red-500 text-xs capitalize">{cart.category}</span>
                    <div                      
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      onClick={()=>removeProduct(cart.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
    
                <div className="flex justify-center w-1/5">
                  <button className='p-2' onClick={()=>handleDec(cart.id)}>-</button>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                     value= {cart.quantity}
                    />
                  <button onClick={()=>handleInc(cart.id)}>+</button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart.price * cart.quantity}
                </span>
              </div>
             
              )
            })
          }
         
          <Link to={'/products'}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            Continue Shopping
          </Link>
        </div>
        
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              item length{/* Item {cart.length} */}
              </span>
            <span className="font-semibold text-sm">${total.toFixed(2)}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Discount - 10%</option>
            </select>
          </div>
          {/* no promocode */}
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              
              <span>${total-10}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
