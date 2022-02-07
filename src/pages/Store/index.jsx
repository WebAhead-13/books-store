import BookCard from "../../components/BookCard";
import PriceFilter from "../../components/PriceFilter/PriceFilter";
// const data = require('../../database/database')
import { data } from "../../database/database";
import React from "react";
import AdsOverlay from "../../components/adsOverlay";
import react from "react";
import Addtocart from "../../components/AddtoCart";

function Store() {
  const [priceFilter, setPriceFilter] = React.useState([0, 999]);
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
              onClick={(e) => {
                Addtocart({ title, price });
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
