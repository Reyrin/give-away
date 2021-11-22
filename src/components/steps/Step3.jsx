import React from "react";
import { Link } from "react-router-dom";

import Button from "./../ui/Button";

import bgImg1 from "./../../assets/img/bg-img-1.png";

function Step3() {
    return (
        <>
            <div className="steps__descr">
                <h2 className="steps__stepTitle">Step 3</h2>
                <h3 className="steps__title">Amazon Prime</h3>
                <p className="steps__text steps__text--mb45">
                    Do you have an Amazon Prime account?
                    <br />
                    <br />
                    To be able to participate in this giveaway you need to have
                    Amazon Prime.
                </p>

                <Link to="/step-4">
                    <Button text={"Yes, i have"} small={true} />
                </Link>

                <Button text={"no, i don’t have"} small={true} disable={true} />
            </div>

            <img src={bgImg1} alt="Acne Face" className="steps__img" />
        </>
    );
}

export default Step3;
