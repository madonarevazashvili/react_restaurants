import React, { useContext, useState } from 'react'
import { Context } from "./Context.js"
import "./Menu.css"
import { Link } from 'react-router-dom'
export default function Menu(props) {
  let data = useContext(Context)
  const [x,setX]= useState(false)
  return (
    <div className="menu_Container">
      {data.data.map((item,key) => {
        return (
          <div key={key} className='menu_box' style={ {margin: '50px', borderRadius:"10px"}} >
            <img className='img' style={{width:"200px",height:"150px", borderRadius: "10px" }} src={item.image}/>
            <h1 className='hname'>{item.name}</h1>
            <h6 className="price_h2">Price:{item.price}</h6>
            <Link to={`/react_restaurants/menu/${item.name}`}><button className="details_btn">Details</button></Link> 
            <button className="add_btn" onClick={(e) => { data.add(item.id);setX(!x);e.target.setAttribute("disabled",true) }}>{item.status}</button>
          </div>
        )
      })}
    </div >
  )
}