import BookCard from "../../components/BookCard";
import PriceFilter from "../../components/PriceFilter/PriceFilter";
// const data = require('../../database/database')
import { data } from "../../database/database";
import React from "react";
import AdsOverlay from "../../components/adsOverlay";

function Store({ items, setItems, quantity }) {
  const [priceFilter, setPriceFilter] = React.useState([0, 999]);
  const addItemsHandler = (product) => {
    const findItem = items.find((items) => items.title === product.title);
    if (!findItem) {
      setItems((oldItems) => [...oldItems, product]);
      alert("added to cart");
    } else {
      setItems(
        items.map((item) =>
          item.title === product.title
            ? { ...item, quantity: ++item.quantity }
            : item
        )
      );
      <addPrice />;
      alert("added to cart");
    }
  };
  React.useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(items));
  }, [items]);
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
              onClick={addItemsHandler}
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
