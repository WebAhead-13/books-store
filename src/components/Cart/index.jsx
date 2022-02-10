import React from "react";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';
import "./style.css";
 

const removeAllItems = (items) => {
  localStorage.removeItem("selectedBooks");
  items = null;
  window.location.reload();
};

const removeOneItem = (selectedBook, item) => {
  if (selectedBook[item].quantity === 1) {
  }
  selectedBook[item].quantity--;
};

const Cart = ({ items }) => { 
  console.log(items)
;  return ( 
  <Popup trigger={<span className="spanCart"> Cart </span>} Cart>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Your Cart
         </div>
        <div className="content"> 
      {items.map(product => 
          <div key = {product}> {product.title} : {product.price} : {product.quantity}
        </div>
          )}
      </div>
      )
      </div>
    )}
  </Popup> 
) ; 


      }
export default Cart;
