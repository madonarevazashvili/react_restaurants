import React, { useContext } from 'react'
import { Context } from "./Context.js"
import { useState } from 'react'
export default function Add() {
    let counter = 1;
    const [quantity, setQuantity] = useState(false)
    let data = useContext(Context)
    const [x, setX] = useState(false)
    return (
        <div className="menu_Container">
            {data.data.map((item, key) => {
                if (item.status !== "Add to cart") {
                    return (
                        <div key={key} className='menu_box' style={{ margin: '50px', borderRadius: "10px" }}>
                            <img className='img' style={{ width: "200px", height: "150px", borderRadius: "10px" }} src={item.image} />
                            <h1 className='h'>{item.name}</h1>
                            <h2 className="h2">Price:{item.price}</h2>
                            <button onClick={() => { data.context.add(item.id) }}>{item.status}</button>
                            <h1>Total Price :{item.price}</h1>
                            <h1>Total Quantity :{counter}</h1>
                            <button onClick={() => { if (counter > 0) { counter -= 1; item.price = item.price * counter; setX(!x); console.log(item.price) } }}>-</button>
                            <button onClick={() => { if (counter > 0) { counter += 1; item.price = item.price * counter; setX(!x) } }}>+</button>
                            <buttun>Remove </buttun>
                        </div>
                    )
                }
            })}
        </div >
    )
}
