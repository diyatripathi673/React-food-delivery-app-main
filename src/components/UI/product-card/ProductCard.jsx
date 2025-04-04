import React, { useState } from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  // State to manage the visibility of the "Item added" message
  const [popupVisible, setPopupVisible] = useState(false);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );

    // Show the popup for a few seconds
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000); // Hide the popup after 2 seconds
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Popup message when item is added to cart */}
      {popupVisible && (
        <div className="popup-message">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
