import React from "react";

function AddInCart(props) {
   return (
      
         <div className="button-in-cart" onClick={props.handleClick}>
            Добавить в корзину
            <div className="triangle-right1"></div>            
            <div className="triangle-right2"></div>
            <div className="triangle-left1"></div>            
            <div className="triangle-left2"></div>

         </div>
     
   )
}
export default AddInCart