import "./style.css";

const BookCard = ({ image, title, author, description, price, onclick }) => {
  return (
    <div
      className="cardContainer1"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="cartIcon">
        <img src="iconCart.png" alt="" onclick={onclick} />{" "}
      </div>
      {/* <div className="imageContainer">
        <img src={image} alt="" />
      </div> */}
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
