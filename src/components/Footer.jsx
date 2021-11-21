import React from "react";

function Footer() {
    return (
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
    );
}

export default Footer;
