import React from "react";
import { Link } from "react-router-dom";

import Button from "./../ui/Button";

import bgImg1 from "./../../assets/img/bg-img-1.png";
import toAmazon from "./../../assets/img/toAmazon.svg";

function Step5() {
    return (
        <>
            <div className="steps__descr">
                <h2 className="steps__stepTitle">Step 5</h2>
                <h3 className="steps__title steps__title--mw559 steps__title--mb30">
                    Buy and Provide order ID to our Manager
                </h3>
                <p className="steps__text">
                    Click the button <span>GO TO AMAZON</span> and{" "}
                    <span>Buy a Product</span>
                </p>

                <Link to="/">
                    <div className="steps__toAmazon">
                        <Button text={"Go to amazon"} />
                        <img src={toAmazon} alt="to Amazon" className="steps__iconAmazon" />
                    </div>
                </Link>

                <p className="steps__text steps__text--mb10 steps__text--mt56 steps__text--w390">
                    Click on the button below and{" "}
                    <span>Provide Order ID to our Manager</span> in FB Messenger
                </p>
                <p className="steps__any-questions">
                    (If you have any questions, you can ask them to our Manager)
                </p>
                <Link to="/">
                    <Button text={"provide order id"} />
                </Link>
            </div>

            <img src={bgImg1} alt="Acne Face" className="steps__img" />
        </>
    );
}

export default Step5;
