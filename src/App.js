import headerImg from "./assets/img/banner_picture.png";

import chooseIcon from "./assets/img/choose.svg";
import buyIcon from "./assets/img/buy.svg";
import reviewIcon from "./assets/img/review.svg";
import moneyIcon from "./assets/img/money.svg";

import star from "./assets/img/star.svg";

import amazonStore from "./assets/img/amazon_prime_logo.svg";

function App() {
    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="header__title">Autumn Giveaways for FREE</h1>
                <p className="header__text">
                    Participate in Autumn Giveaway and treat yourself to nice
                    and refreshing cosmetics for free
                </p>

                <img
                    src={headerImg}
                    alt="GiveAway Img"
                    className="header__img"
                />
            </div>
            <main>
                <section className="product">
                    <div className="product__item">
                        <div className="product__slider"></div>
                        <div className="product__info">
                            <div className="product__reviews">
                                <div className="product__best-seller">
                                    Best seller
                                </div>
                                <div className="product__stars">
                                    <img src={star} alt="Star-1" />
                                    <img src={star} alt="Star-2" />
                                    <img src={star} alt="Star-3" />
                                    <img src={star} alt="Star-4" />
                                    <img src={star} alt="Star-5" />
                                </div>
                                <div className="product__quantity">
                                    (1731 reviews)
                                </div>
                            </div>
                            <h3 className="product__title">
                                Acne Treatment Cystic Acne heals, repairs &
                                renews
                            </h3>
                            <div className="product__description">
                                <h4>Description:</h4>
                                <p>
                                    Addictively refreshing gel-cream leaves skin
                                    plump, dewy, glowing.
                                </p>
                            </div>
                            <div className="items-left">items left: 12</div>
                            <div className="product__line"></div>
                            <div className="price">
                                <div className="price__old-price">us$25.89</div>
                                <div className="price__current-price">
                                    $0.00 FREE
                                </div>
                            </div>
                            <button className="btn">Select</button>
                            <img
                                src={amazonStore}
                                alt="Amazone Store"
                                className="product__store"
                            />
                        </div>
                    </div>
                    <div className="overview">
                        <h2 className="overview__title">Overview</h2>
                        <ul className="overview__list">
                            <li>
                                Who It's For
                                <ul className="overview__sublist">
                                    <li>
                                        Very Dry, Dry, Dry Combination Skin
                                        (Type 1, 2)
                                    </li>
                                </ul>
                            </li>
                            <li>
                                What It Is
                                <ul className="overview__sublist">
                                    <li>
                                        Step 3 in our customized 3-Step Skincare
                                        System.
                                    </li>
                                    <li>
                                        Dermatologist-developed face moisturizer
                                        softens, smooths, improves. Leaves skin
                                        glowing.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                What It Does
                                <ul className="overview__sublist overview__sublist--list-type">
                                    <li>
                                        Silky lotion delivers 8-hour hydration.
                                    </li>
                                    <li>Slips on easily, absorbs quickly.</li>
                                    <li>
                                        Helps strengthen skin’s own moisture
                                        barrier so more moisture stays in.{" "}
                                        <span>
                                            Skin that holds onto moisture has a
                                            youthful-looking glow.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p className="overview__read-more">Read more...</p>
                    </div>
                </section>
                <section className="work">
                    <h2 className="work__title">How does it work?</h2>
                    <div className="work__items">
                        <div className="work__item">
                            <div className="work__circle">
                                <p className="work__text">
                                    Easy <span>as</span> 1-2-3
                                </p>
                            </div>
                            <div className="work__arrow">
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.6732 8.21089L16.5312 1.06888C16.0954 0.633127 15.3887 0.633127 14.953 1.06888C14.5171 1.50472 14.5171 2.21124 14.953 2.64708L20.1899 7.88405H1.11594C0.499673 7.88405 0 8.38372 0 8.99999C0 9.61617 0.499673 10.1159 1.11594 10.1159H20.1899L14.9531 15.3529C14.5173 15.7887 14.5173 16.4953 14.9531 16.9311C15.171 17.1488 15.4566 17.2579 15.7422 17.2579C16.0278 17.2579 16.3134 17.1488 16.5313 16.9311L23.6732 9.78909C24.109 9.35325 24.109 8.64673 23.6732 8.21089Z"
                                        fill="black"
                                        fillOpacity="0.6"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="work__item">
                            <div className="work__circle">
                                <img
                                    src={chooseIcon}
                                    alt="Choose product"
                                    className="work__img"
                                />
                            </div>
                            <div className="work__arrow">
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.6732 8.21089L16.5312 1.06888C16.0954 0.633127 15.3887 0.633127 14.953 1.06888C14.5171 1.50472 14.5171 2.21124 14.953 2.64708L20.1899 7.88405H1.11594C0.499673 7.88405 0 8.38372 0 8.99999C0 9.61617 0.499673 10.1159 1.11594 10.1159H20.1899L14.9531 15.3529C14.5173 15.7887 14.5173 16.4953 14.9531 16.9311C15.171 17.1488 15.4566 17.2579 15.7422 17.2579C16.0278 17.2579 16.3134 17.1488 16.5313 16.9311L23.6732 9.78909C24.109 9.35325 24.109 8.64673 23.6732 8.21089Z"
                                        fill="black"
                                        fillOpacity="0.6"
                                    />
                                </svg>
                            </div>
                            <p className="work__description">Choose product</p>
                        </div>

                        <div className="work__item">
                            <div className="work__circle">
                                <img
                                    src={buyIcon}
                                    alt="Choose product"
                                    className="work__img"
                                />
                            </div>
                            <div className="work__arrow">
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.6732 8.21089L16.5312 1.06888C16.0954 0.633127 15.3887 0.633127 14.953 1.06888C14.5171 1.50472 14.5171 2.21124 14.953 2.64708L20.1899 7.88405H1.11594C0.499673 7.88405 0 8.38372 0 8.99999C0 9.61617 0.499673 10.1159 1.11594 10.1159H20.1899L14.9531 15.3529C14.5173 15.7887 14.5173 16.4953 14.9531 16.9311C15.171 17.1488 15.4566 17.2579 15.7422 17.2579C16.0278 17.2579 16.3134 17.1488 16.5313 16.9311L23.6732 9.78909C24.109 9.35325 24.109 8.64673 23.6732 8.21089Z"
                                        fill="black"
                                        fillOpacity="0.6"
                                    />
                                </svg>
                            </div>
                            <p className="work__description">Buy product</p>
                        </div>

                        <div className="work__item">
                            <div className="work__circle">
                                <img
                                    src={reviewIcon}
                                    alt="Choose product"
                                    className="work__img"
                                />
                            </div>
                            <div className="work__arrow">
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.6732 8.21089L16.5312 1.06888C16.0954 0.633127 15.3887 0.633127 14.953 1.06888C14.5171 1.50472 14.5171 2.21124 14.953 2.64708L20.1899 7.88405H1.11594C0.499673 7.88405 0 8.38372 0 8.99999C0 9.61617 0.499673 10.1159 1.11594 10.1159H20.1899L14.9531 15.3529C14.5173 15.7887 14.5173 16.4953 14.9531 16.9311C15.171 17.1488 15.4566 17.2579 15.7422 17.2579C16.0278 17.2579 16.3134 17.1488 16.5313 16.9311L23.6732 9.78909C24.109 9.35325 24.109 8.64673 23.6732 8.21089Z"
                                        fill="black"
                                        fillOpacity="0.6"
                                    />
                                </svg>
                            </div>
                            <p className="work__description">
                                Test and share review
                            </p>
                        </div>

                        <div className="work__item">
                            <div className="work__circle">
                                <img
                                    src={moneyIcon}
                                    alt="Choose product"
                                    className="work__img"
                                />
                            </div>
                            <p className="work__description">
                                Get 100% money back
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer__privacy">
                    <h3>Privacy and Terms</h3>
                    <ul>
                        <li>
                            <a
                                href="https://socialmediaholding.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://socialmediaholding.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms of use
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__help">
                    <h3>Need Help?</h3>
                    <ul>
                        <li>
                            <a
                                href="https://socialmediaholding.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mail@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__social">
                    <h3>Social</h3>
                    <ul>
                        <li>
                            <a
                                href="https://socialmediaholding.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://socialmediaholding.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="copyright">© All Rights Reserved</div>
        </div>
    );
}

export default App;
