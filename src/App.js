import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';

const { getData } = require("./db/db");

const foods = getData();

const tele = window.Telegram.WebApp

function App() {

  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    tele.ready();
  })

  const onAdd = (food) => {
    // a function for adding the food to the cart item
    const exist = cartItems.find((x) => x.id === food.id );
    //checking if the foodd is alreadddy in the cart item or not
    if (exist) {
      setCartItems(cartItems.map((x) => 
        x.id === food.id ? {...exist, quantity: exist.quantity + 1} : x
      )
      );
      //if ita alreaddy in the cart item, we findd it using the map meathod, we checking the id of each foodd in the cart items
      //and comaparing the id of each items with the food id. we find it and add 1 to the quantity
    } else {
      setCartItems([...cartItems,{...food, quantity: 1}])
      //if its not in the cart items, we set the cart items to the previous state and set the quantity to 1
    }
  }

  const onRemove= (food) => {
    const exist = cartItems.find((x) => x.id === food.id );
    if (exist.quantity === 1 ){
      setCartItems(cartItems.filter(x=>x.id !== food.id))
    } else {
      setCartItems(cartItems.map(x=>
        x.id === food.id ? {...exist,quantity: exist.quantity-1 } : x
        ))
    }
  }

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show()
  }

  return (
    <>
    <h1 className='heading'>Order Foodd</h1>
    <Cart cartItems={cartItems} onRemove={onCheckout}/>

    <div className='cards__container'>
      {foods.map((food) =>{
        return <Card food={food} key={food.id}  onAdd={onAdd} onRemove={onRemove}/>;
      })}
    </div>
    

 

    </>
  );
}

export default App;
