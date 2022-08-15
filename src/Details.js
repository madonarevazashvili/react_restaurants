import React, { useContext } from 'react'
import { Context } from "./Context.js"
import { useParams, Link } from "react-router-dom"
export default function Details() {
    let datiles = useContext(Context)
    let { id } = useParams()
    let x;
    x = datiles.data.find((item) => {
        if (item.name === id) {
            return item
        }
    })
    return (<>
        <div style={{ display: "flex", backgroundColor: "chocolate", alignItems: "center", justifyContent: "center" }}>
            <div style={{alignItems: "center", justifyContent: "center" }}> <img className='img' style={{ width: "400px", height: "400px", borderRadius: "10px", alignItems: "center", justifyContent: "center" }} src={x.image} />
                <h4 className="details_h4" style={{ alignItems: "center", color: "rgba(112, 11, 11, 0.885)", fontSize: "15px", fontWeight: "bold" }}>Prodact name:{x.name}</h4>
                <h4 style={{ color: "rgba(112, 11, 11, 0.885)", fontSize: "10px", fontWeight: "bold" }}>Category: {x.category}</h4>
                <h4 lassName="details_h4" style={{ color: "rgba(112, 11, 11, 0.885)", fontSize: "10", fontWeight: "bold" }}>  inforimation about:{x.description}
                </h4>
                <h5 style={{ color: "rgba(112, 11, 11, 0.885)", fontSize: "15px", fontWeight: "bold" }}>Preice: {x.price}</h5>
            </div>
            <Link to={`/react_restaurants/menu`}><button style={{ backgroundColor: "red", borderRadius: "10px" }}>Back to menu</button></Link>
        </div>

    </>
    )
}