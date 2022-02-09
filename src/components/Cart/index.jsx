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

const Cart = ({ item }) => (
  <Popup trigger={<span className="spanCart"> Cart </span>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Your Cart </div>
        <div className="content">
          <li></li>
          <br />
        </div>
      </div>
    )}
  </Popup>
);


export default Cart;
