import React, { useReducer } from "react";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';
import "./style.css";

const removeAllItems = (items) => {
  localStorage.removeItem("selectedBooks");
  items = null;
  window.location.reload();
};

// const removeOneItem = (product) => {
//   if (product.quantity != 1) {
//     setItems(
//       items.map((item) =>
//         item.title === product.title
//           ? { ...item, quantity: --item.quantity }
//           : item
//       )
//     );
//   } else {
//     removeItem((oldItems) => [...oldItems, product]);
//     alert("added to cart");
//   }
// if (product.quantity === 1) {
//   } else --product.quantity;
// };
const discount = "shh... the total is incorrect";
const discount1 = "shh... the total is still incorrect";

function sumOfArrVal(arr) {
  let sum = 0;
  arr.map((val) => (sum += val));
  return sum;
}
const Cart = ({ items }) => {
  // totalPrice = [quatity*price]
  const totalPrice = items.map((product) => product.price * product.quantity);
  // const quan = items.map((product) => product.quantity);
  const totalCart = sumOfArrVal(totalPrice);
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
                  <button className="quantity">{product.quantity}</button>
                  <button> - </button>
                </div>
              ))}
            </div>
            <div className="total">
              <h3>
                Total : $
                {totalCart > 100
                  ? totalCart > 300
                    ? totalCart * 0.8 + " " + discount1
                    : totalCart * 0.9 + " " + discount
                  : totalCart}{" "}
              </h3>
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
