import React from "react";
import Button from "./Button";
import dataCard from "../datacard";
import dataButton from "../databutton";
import CardOfProduct from "./ProductCards";

function Main() {
   let listOfCards = dataCard.map((card, idx) => {
      return <CardOfProduct key={idx} datacard={card} />
   })
   let listOfButtons = dataButton.map((button) => {
      return ( 
      <Button key={button.uid} button={button} />
      )
   })

   return (
      <div>
         <h1> Тату машинки</h1>
         <div className="buttons-list">
            {listOfButtons}
         </div>
         <div className="card-wrapper">
            {listOfCards}
         </div>
      </div>
   )
}

export default Main




