import React, { useEffect, useState } from "react";
import "./style.css";
import Cards from "../../components/cards/cards";

const Home = () => {
  const APIKEY = process.env.REACT_APP_APIKEY;
  const [topselling, setTopselling] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => setTopselling(data.results));
  }, []);
  console.log(topselling);
  return (
    <div className="homeContainer">
      <h1>Welcome to books store</h1>
      <div className="cardsContainer">
        {topselling.length ? (
          topselling.map((book) => (
            <Cards
              author={book.author}
              title={book.title}
              description={book.description}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
