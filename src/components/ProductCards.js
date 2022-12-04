import React, { useState } from "react";
import AddInCart from "./Incart";
import CountBlock from "./CountBlock";

function CardOfProduct(props) {
   let [heart, setHeart] = useState(props.datacard.isLiked)
   let [showCart, setShowCart] = useState(true)

   function changeCartState() {
      setShowCart(prevCart => !prevCart)
      changeNumberPlus()
   }
   
   let heartClass = heart ? './assets/images/like2.svg' : ' ./assets/images/like.svg' 

   let changeFavourite = () => {
      setHeart(prev => !prev)
   }

   let [number, setNumber] = useState(0);

   let changeNumberPlus = () => {
      setNumber(prev => prev+1)
   }

   let changeNumberMinus = () => {
      setNumber(prev => {
         if (prev === 1) {
            setNumber(0)
            changeCartState()
         }
         else {
            return prev-1
         }
      } )
   }
   
   return (
      <div className="card">
         {heart}
         <h2> {heart ? "I LIKE IT" : "DO YOU LIKE IT?"} </h2>
         <img src={props.datacard.img} alt='cardimage' />
         <div className="text-block">
            <h3>{props.datacard.title}</h3>
            <div className="text-price">{props.datacard.price} €</div>
            {showCart && <AddInCart handleClick={changeCartState} />}
                       
         </div>
         <div className='favourite' >
            <img className="favourite-icon" src={heartClass} alt="like" 
            onClick={changeFavourite}/>
         </div>
         {!showCart && <CountBlock minus={changeNumberMinus} plus={changeNumberPlus} number={number} />}         
      </div>
   )
}

export default CardOfProduct