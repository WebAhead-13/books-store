import React from "react";
import e from "../../pages/Store";

function Addtocart({ title, price }) {
  React.useEffect(() => {
    localStorage.setItem("title", title);
    localStorage.setItem("price", price);
  }, [title, price]);
}

export default Addtocart;
