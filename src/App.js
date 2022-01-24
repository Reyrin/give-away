import React from "react";
import { Route } from "react-router-dom";

import Stepper from "./components/ui/Stepper";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";

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
                <Route path={"/"} exact>
                    <section className="product">
                        <div className="container">
                            <div className="product__content">
                                <ProductItem />
                                <Overview />
                            </div>
                        </div>
                    </section>
                </Route>

                <Route path={"/step-1"} exact>
                    <section className="steps">
                        <div className="container">
                            <div className="steps__content">
                                <Stepper active={1} />
                                <Step1 />
                            </div>
                        </div>
                    </section>
                </Route>

                <Route path={"/step-2"} exact>
                    <section className="steps">
                        <div className="container">
                            <div className="steps__content">
                                <Stepper active={2} />
                                <Step2 />
                            </div>
                        </div>
                    </section>
                </Route>
                
                <Route path={"/step-3"} exact>
                    <section className="steps">
                        <div className="container">
                            <div className="steps__content">
                                <Stepper active={3} />
                                <Step3 />
                            </div>
                        </div>
                    </section>
                </Route>

                <Route path={"/step-4"} exact>
                    <section className="steps">
                        <div className="container">
                            <div className="steps__content">
                                <Stepper active={4} />
                                <Step4 />
                            </div>
                        </div>
                    </section>
                </Route>

                <Route path={"/step-5"} exact>
                    <section className="steps">
                        <div className="container">
                            <div className="steps__content">
                                <Stepper active={5} />
                                <Step5 />
                            </div>
                        </div>
                    </section>
                </Route>

                <section className="work">
                    <div className="container">
                        <div className="work__content">
                            <h2 className="work__title">How does it work?</h2>
                            <div className="work__items">
                                <WorkItem text={true} />
                                <WorkItem
                                    content={chooseIcon}
                                    descr={"Choose product"}
                                />
                                <WorkItem
                                    content={buyIcon}
                                    descr={"Buy product"}
                                />
                                <WorkItem
                                    content={reviewIcon}
                                    descr={"Test and share review"}
                                />
                                <WorkItem
                                    content={moneyIcon}
                                    descr={"Get 100% money back"}
                                    arrow={false}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;
