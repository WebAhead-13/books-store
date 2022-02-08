import "./style.css";

const BookCard = ({ image, title, author, description, price, onClick }) => {
  return (
    <div
      className="cardContainer1"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="cartIcon">
        <img
          src="iconCart.png"
          alt=""
          onClick={() => onClick({ title, price, quantity: 1 })}
        />{" "}
      </div>
      <div className="infoContainer">
        <div className="tiltle">
          <h3>{title}</h3>{" "}
        </div>
        <div className="apContainer">
          <div className="author">
            <span>{author}</span>{" "}
          </div>
          <div className="price">
            <span>{price}$</span>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
