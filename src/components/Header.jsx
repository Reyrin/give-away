import React from "react";
import { Link } from "react-router-dom";

import headerImg from "./../assets/img/banner_picture.png";

function Header() {
    return (
        <Link to="/">
            <div className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">
                            Autumn Giveaways for FREE
                        </h1>
                        <p className="header__text">
                            Participate in Autumn Giveaway and treat yourself to
                            nice and refreshing cosmetics for free
                        </p>

                        <img
                            src={headerImg}
                            alt="GiveAway Img"
                            className="header__img"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Header;
