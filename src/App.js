import "./rest.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import ContactUs from './ContactUs';
import Menu from './Menu';
import Cart from './Cart';
import Error from './Error';
import Header from './Header';
import Footer from "./Footer";
import Details from './Details';
import { useState } from "react";
import About from "./About.js"
import { Context } from "./Context.js"
function App() {
  let data2 = require('./data.json')
  const [data, setData] = useState(data2)
  const [number,setNumber]=useState(0)
  function changeStatus(id) {
    data.map((item) => {
      if (item.id === id) {
        item.status = "Added"
      }
    })
    setNumber(number + 1)

  }

  function remove(id){
    data.map((item) => {
      if (item.id == id) {
        item.status = "Add to cart"
      }
})
    setNumber(number - 1)
  }

  function price(id) {
    data.map((item) => {
      if (item.id == id) {
       
        console.log(item.price)
      }
    })

  }

  return (
    <>
      <Context.Provider value={{ data: data, add: changeStatus, remove: remove, price:price,number:number }} >
        <Routes>
          <Route path="/react_restaurants" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="/react_restaurants/menu" element={<Menu />} />
            <Route path="/react_restaurants/menu/:id" element={<Details />} />
            <Route path="/react_restaurants/contact-us" element={<ContactUs />} />
            <Route path='/react_restaurants/about' element={<About />} />
            <Route path='/react_restaurants/cart' element={<Cart  />} />
            <Route path="*" element={<Error />} />
          </ Route>
        </Routes>
      </Context.Provider>
      <Footer />
    </>

  );
}

export default App;
