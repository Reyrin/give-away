import React from "react";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Overview from "./components/Overview";
import WorkItem from "./components/WorkItem";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

import chooseIcon from "./assets/img/choose.svg";
import buyIcon from "./assets/img/buy.svg";
import reviewIcon from "./assets/img/review.svg";
import moneyIcon from "./assets/img/money.svg";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <section className="product">
                    <ProductItem />
                    <Overview />
                </section>
                <section className="work">
                    <h2 className="work__title">How does it work?</h2>
                    <div className="work__items">
                        <WorkItem text={true} />
                        <WorkItem content={chooseIcon} descr={"Choose product"} />
                        <WorkItem content={buyIcon} descr={"Buy product"} />
                        <WorkItem content={reviewIcon} descr={"Test and share review"} />
                        <WorkItem content={moneyIcon} descr={"Get 100% money back"} arrow={false} />
                    </div>
                </section>
            </main>
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;
