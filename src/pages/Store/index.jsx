import BookCard from "../../components/BookCard"
// const data = require('../../database/database')
import {data} from "../../database/database"

function Store() {
    
    return (<div style={{display:'flex', flexWrap:'wrap'}}>
         {data.map((book) =>{
             return <BookCard image={book.book_image} title={book.title} author={book.author} description={book.description} price={book.price} onClick={() => alert ("Added to Cart") } />
        })}
        <BookCard image={'https://robcubbon.com/wp-content/uploads/2012/08/e-book-example.jpg'} title={"MAhmoud"} author={"MahmoudDiab"} price={'99999$'} description={'you will not see this shit in any place'}/>
    </div>)
}

export default Store