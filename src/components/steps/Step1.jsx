import React from "react";
import { Link } from "react-router-dom";

import Button from "./../ui/Button";

import bgImg1 from "./../../assets/img/bg-img-1.png";

function Step1() {
    return (
        <>
            <div className="steps__descr">
                <h2 className="steps__stepTitle">Step 1</h2>
                <h3 className="steps__title steps__title--w318">Lorem ipsum dolor sit amet</h3>
                <p className="steps__text">
                    Aliquam urna arcu, scelerisque vel viverra sed, pellentesque
                    sit amet metus. Curabitur at luctus massa. Vestibulum
                    pretium sem tortor, vitae mattis odio accumsan vitae. Fusce
                    id luctus erat:
                </p>
                <ol className="steps__mini-list">
                    <li>Mauris rutrum interdum condimentum.</li>
                    <li>Donec commodo quis arcu eget pretium.</li>
                </ol>
                <Link to="/step-2">
                    <Button text={"Agree and continue"} />
                </Link>
            </div>

            
            <img src={bgImg1} alt="Acne Face" className="steps__img" />
        </>
    );
}

export default Step1;
