import React from "react";

function Overview() {
    return (
        <div className="overview">
            <h2 className="overview__title">Overview</h2>
            <ul className="overview__list">
                <li>
                    Who It's For
                    <ul className="overview__sublist">
                        <li>Very Dry, Dry, Dry Combination Skin (Type 1, 2)</li>
                    </ul>
                </li>
                <li>
                    What It Is
                    <ul className="overview__sublist">
                        <li>
                            Step 3 in our customized 3-Step Skincare System.
                        </li>
                        <li>
                            Dermatologist-developed face moisturizer softens,
                            smooths, improves. Leaves skin glowing.
                        </li>
                    </ul>
                </li>
                <li>
                    What It Does
                    <ul className="overview__sublist overview__sublist--list-type">
                        <li>Silky lotion delivers 8-hour hydration.</li>
                        <li>Slips on easily, absorbs quickly.</li>
                        <li>
                            Helps strengthen skin’s own moisture barrier so more
                            moisture stays in.{" "}
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
    );
}

export default Overview;
