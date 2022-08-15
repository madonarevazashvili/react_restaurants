import React, { useContext, useEffect } from 'react'
import { Context } from "./Context.js"
import { useState } from 'react'
export default function Add(props) {
  let counter = 1;
  const [price, setPrice] = useState(0)

  let data = useContext(Context)
  const [x, setX] = useState(false)
  useEffect(() => {
    let z;
    data.data.map((item) => {
      z += item.price
    })
    setPrice(z)
  }, [])
  return (
    <div className="menu_Container">
      {data.data.map((item, key) => {
        if (item.status !== "Add to cart") {
          item.quantity = 1;
          return (
            <div key={key} className='menu_box' style={{ height: "400px", backgroundColor: "chocolate", margin: '50px', borderRadius: "10px" }}>
              <img className='img' style={{ width: "200px", height: "170px", borderRadius: "10px" }} src={item.image} />
              <h1 style={{ color: "blue", fontSize: "15px" }} className='hname'>{item.name}</h1>
              <h1 style={{ color: "black", fontSize: "20px" }} >Price :{item.price}</h1>
              <h1 style={{ color: "black", fontSize: "20px" }}>Quantity :{item.quantity}</h1>
              <button style={{ color: "black", fontSize: "20px", backgroundColor: "red" }}
                onClick={() => { if (item.quantity > 1) { item.quantity = item.quantity - 1; setPrice(price - item.price); } }}>-</button>
              <button style={{ color: "black", fontSize: "20px", backgroundColor: "red", marginLeft: "140px" }} onClick={() => { item.quantity = item.quantity + 1; setPrice(price + item.price); }}>+</button>
              <button style={{ color: "black", fontSize: "20px", backgroundColor: "#f13c20", marginLeft: "40px", borderRadius: "50%" }} onClick={() => { data.remove(item.id); setX(!x) }} className="remove">Remove </button>
            </div>
          )
        }
      })}
    </div >
  )
}