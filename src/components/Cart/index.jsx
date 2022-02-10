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
  console.log(items);
  return (
    <Popup trigger={<span className="spanCart"> Cart </span>} Cart>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Your Cart</div>
          <div className="cartContainer">
            <div className="prodContainer">
              <div className="title1">
                <h3>Title</h3>
              </div>
              <div className="price1">
                <h3>Price</h3>
              </div>
              <div className="quantity1">
                <h3>Quantity</h3>
              </div>
            </div>
            <div className="content">
              {items.map((product) => (
                <div key={product} className="product">
                  <div className="title">{product.title}</div>
                  <div className="price">{product.price}</div>
                  <div className="quantity">{product.quantity}</div>
                </div>
              ))}
            </div>
            <div className="total">
              <h3>Total</h3>
            </div>
            <div>
              {/* onclick function */}
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default Cart;
