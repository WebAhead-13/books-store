import BookCard from "../../components/BookCard";
import PriceFilter from "../../components/PriceFilter/PriceFilter";
// const data = require('../../database/database')
import { data } from "../../database/database";
import React from "react";
import AdsOverlay from "../../components/adsOverlay";
import Addtocart from "../../components/AddtoCart";

function Store() {
  const [priceFilter, setPriceFilter] = React.useState([0, 999]);

  // //
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // const loginHandler = () => {
  //   setUser(username);
  //   setPass(password);
  // };
  // //
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />

      {data
        .filter(
          (book) => book.price >= priceFilter[0] && book.price <= priceFilter[1]
        )
        .map((book) => {
          return (
            <BookCard
              image={book.book_image}
              title={book.title}
              author={book.author}
              description={book.description}
              price={book.price}
              onclick={(e) => {
                // setTitle(e.book.title);
                // setPrice(e.book.price);

                const title = e.target.getElementsByClassName("title");
                const price = e.target.getElementsByClassName("price").div;
                <Addtocart title={title} price={price} />;
                console.log({ title, price });
                // const saveBooks = localStorage.getItem("books");
                // const newBook = `title: ${book.title} price: ${book.price},`;
                // localStorage.setItem("books", saveBooks);
                alert("Added to Cart");
              }}
            />
          );
        })}
      <AdsOverlay
        hide={
          data.filter(
            (book) =>
              book.price >= priceFilter[0] && book.price <= priceFilter[1]
          ).length
        }
      />
    </div>
  );
}

export default Store;
