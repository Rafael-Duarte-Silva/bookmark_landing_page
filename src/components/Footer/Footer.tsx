//Components
import "./Footer.scss";

import { IconFacebook } from "../Icons/IconFacebook";
import { IconTwitter } from "../Icons/IconTwitter";
import { LogoBookmarkLight } from "../Icons/LogoBookmarkLight";
import { Link } from "../UI/Link";
import { FooterForm } from "./components/FooterForm";

export const Footer = () => {
    return (
        <footer>
            <div className="Footer-contactUs">
                <span className="Footer-text">35,000 + already joined</span>

                <span className="Footer-title">
                    Stay up-to-date with what we’re doing
                </span>

                <FooterForm />
            </div>
            <nav className="Footer-nav">
                <div className="Footer-flexContent">
                    <a
                        aria-label="Back to home page"
                        href=""
                    >
                        <LogoBookmarkLight className="Footer-logo" />
                    </a>

                    <ul className="Footer-listLink">
                        <li>
                            <Link
                                href=""
                                variant="fifth"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                variant="fifth"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                variant="fifth"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="Footer-listSocialMedias">
                    <li>
                        <a
                            aria-label="Go to the Facebook website"
                            href="https://www.facebook.com/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <IconFacebook className="Footer-icon" />
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Go to the Twitter website"
                            href="https://x.com/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <IconTwitter className="Footer-icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
