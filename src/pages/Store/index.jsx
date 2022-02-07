import BookCard from "../../components/BookCard"
import PriceFilter from "../../components/PriceFilter/PriceFilter"
// const data = require('../../database/database')
import {data} from "../../database/database"
import React from "react";

function Store() {
  const [priceFilter, setPriceFilter] = React.useState([10, 999]);
    return (<div style={{display:'flex', flexWrap:'wrap'}}>
        <PriceFilter 
    priceFilter={priceFilter}
    setPriceFilter={setPriceFilter}
    />
         {data.filter((book) => book.price >= priceFilter[0] && book.price <= priceFilter[1])
         .map((book) =>{
             return <BookCard image={book.book_image} title={book.title} author={book.author} description={book.description} price={book.price} onClick={() => alert ("Added to Cart") } />
        })}
    </div>)
}

export default Store