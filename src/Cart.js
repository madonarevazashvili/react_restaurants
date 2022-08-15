import React, { useContext } from 'react'
import { Context } from "./Context.js"
import { useState} from 'react'
export default function Add( props) {
  let counter = 1;
  const [quantity, setQuantity] = useState(0)
  const [price,setPrice]=useState(0)
  
  let data = useContext(Context)
  const [x, setX] = useState(false)
  return (
    <div className="menu_Container">
      {data.data.map((item, key) => {
        if (item.status !== "Add to cart") {
          return (
            <div key={key} className='menu_box' style={{height:"600px",backgroundColor:"chocolate", margin: '50px', borderRadius: "10px" }}>
              <img className='img' style={{ width: "200px", height: "150px", borderRadius: "10px" }} src={item.image} />
              <h1 className='hname' style={{}}>{item.name}</h1>
              <h1>Price :{item.price}</h1>
              <h1>Total Quantity :{quantity}</h1>
              <button onClick={() => { if (quantity > 1) { setQuantity(quantity - 1); setPrice(price - item.price); setX(!x);}}}>-</button>
              <button onClick={() => { if (quantity > 0) { setQuantity(quantity + 1); item.price *= item.price; setX(!x) } }}>+</button>
              <button onClick={() => { data.remove(item.id); setX(!x) }} className="remove">Remove </button>
            </div>
          )
        }
      })}
    </div >
  )
}
