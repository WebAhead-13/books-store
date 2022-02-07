import React from "react";

function Addtocart({ title, price }) {
  React.useEffect(
    (e) => {
      localStorage.setItem("title", title);
      localStorage.setItem("price", price);
    },
    [title, price]
  );
}

export default Addtocart;
