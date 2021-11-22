import React from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider";
import Button from "./ui/Button";

import star from "./../assets/img/star.svg";
import amazonStore from "./../assets/img/amazon_prime_logo.svg";

function ProductItem() {
    return (
        <div className="product__item">
            <Slider />
            <div className="product__info">
                <div className="product__reviews">
                    <div className="product__best-seller">Best seller</div>
                    <div className="product__stars">
                        <img src={star} alt="Star-1" />
                        <img src={star} alt="Star-2" />
                        <img src={star} alt="Star-3" />
                        <img src={star} alt="Star-4" />
                        <img src={star} alt="Star-5" />
                    </div>
                    <div className="product__quantity">(1731 reviews)</div>
                </div>
                <h3 className="product__title">
                    Acne Treatment Cystic Acne heals, repairs & renews
                </h3>
                <div className="product__description">
                    <h4>Description:</h4>
                    <p>
                        Addictively refreshing gel-cream leaves skin plump,
                        dewy, glowing.
                    </p>
                </div>
                <div className="items-left">items left: 12</div>
                <div className="product__line"></div>
                <div className="price">
                    <div className="price__old-price">us$25.89</div>
                    <div className="price__current-price">$0.00 FREE</div>
                </div>

                <Link to="/step-1">
                    <Button text={"Select"} />
                </Link>

                <img
                    src={amazonStore}
                    alt="Amazone Store"
                    className="product__store"
                />
            </div>
        </div>
    );
}

export default ProductItem;
