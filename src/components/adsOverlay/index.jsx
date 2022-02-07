import BookCard from "../BookCard";
import { data } from "../../database/database";
import "./style.css";

function AdsOverlay(props) {
  console.log(
    1,
    data.slice(Math.floor(Math.random() * 5), Math.floor(Math.random() * 10))
  );
  //If [store props] not empty
  if (props.hide) return " ";
  //If [store props] empty
  return (
    <div className="adsOn">
      <div>
        <h1>Sorry , no books available under selected filters</h1>
        <h1> Please consider the following books</h1>
      </div>
      {data
        .slice(Math.floor(Math.random() * 5), Math.floor(Math.random() * 10))
        .map((book) => {
          return (
            <BookCard
              image={book.book_image}
              title={book.title}
              author={book.author}
              description={book.description}
              price={book.price}
              onClick={() => alert("Added to Cart")}
            />
          );
        })}
    </div>
  );
}

export default AdsOverlay;
