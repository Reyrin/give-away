import React from "react";
import { Link } from "react-router-dom";

import Button from "./../ui/Button";

import bgImg2 from "./../../assets/img/bg-img-2.png";
import pressHereImg from "./../../assets/img/pressHere.svg";

function Step2() {
    return (
        <>
            <div className="steps__descr">
                <h2 className="steps__stepTitle">Step 2</h2>
                <h3 className="steps__title steps__title--w406">Share Facebook post</h3>
                <p className="steps__text steps__text--mb50">
                    To participate in this giveaway please share this giveaway
                    offer with your friends. Not only your friends will
                    appreciate this offer but you will receive $10 Amazon Gift
                    Card for each of your friends that participates in this
                    giveaway!
                </p>

                <Link to="/step-3">
                    <Button text={"continue"} />
                </Link>
            </div>

            <img src={bgImg2} alt="Acne Face" className="steps__img" />
            <img src={pressHereImg} alt="press Here" className="steps__press" />
        </>
    );
}

export default Step2;
