import React from "react";
import { Link } from "react-router-dom";

import Button from "./../ui/Button";

import bgImg1 from "./../../assets/img/bg-img-1.png";
import giftIcon from './../../assets/img/gift.svg'

function Step4() {
    return (
        <>
            <div className="steps__descr">
                <h2 className="steps__stepTitle">Step 4</h2>
                <h3 className="steps__title steps__title--w486">
                    How to Buy a Product with 100% BONUS!
                </h3>

                <ol className="steps__list">
                    <li>
                        <div>
                            You need to Buy our Product on Amazon at the
                            specified price $20.89!
                        </div>
                    </li>
                    <li>
                        <div>
                            After the purchase - Send us your Order Number or
                            the Screenshot to our manager in FB Messenger
                        </div>
                    </li>
                    <li>
                        <div>
                            When you receive the product please use it and share
                            product reviews
                        </div>
                    </li>
                    <li>
                        <div>
                            We will send you the <span>25$ Amazon Gift Card</span> code
                            within 24 hours after we get short review from you.
                        </div>
                    </li>
                    <li>
                        <div>
                            As a result, you will receive our Product Free!
                        </div>
                        <img src={giftIcon} alt="Gift" className="steps__gift" />
                    </li>
                </ol>
                <Link to="/step-5">
                    <Button text={"Get Offer"} />
                </Link>
                <div className="steps__dont-like">I don't like offer terms</div>
            </div>

            <img src={bgImg1} alt="Acne Face" className="steps__img" />
        </>
    );
}

export default Step4;
