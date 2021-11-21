import React from "react";

function WorkItem({ content, descr, arrow = true, text = false }) {
    return (
        <div className="work__item">
            <div className="work__circle">
                {
                  text === true ? (
                    <p className="work__text">Easy <span>as</span> 1-2-3</p>
                  ) : (
                    <img src={content} alt="Choose product" className="work__img" />
                  )
                }
                
            </div>

            {arrow && (
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
            )}

            <p className="work__description">{descr}</p>
        </div>
    );
}

export default WorkItem;
