//Components
import "./Footer.scss";

import { IconFacebook } from "../icons/IconFacebook";
import { IconTwitter } from "../icons/IconTwitter";
import { LogoBookmarkLight } from "../icons/LogoBookmarkLight";
import { Link } from "../ui/Link";
import { FooterForm } from "./components/FooterForm";

import { linkList } from "@/constants/linkList";

export const Footer = () => {
    return (
        <footer>
            <div className="Footer-contactUs">
                <span className="Footer-text">35,000 + already joined</span>

                <span className="Footer-title">Stay up-to-date with what we’re doing</span>

                <FooterForm />
            </div>
            <nav className="Footer-nav">
                <div className="Footer-flexContent">
                    <a
                        aria-label="Back to home page"
                        href="#"
                    >
                        <LogoBookmarkLight className="Footer-logo" />
                    </a>

                    <ul className="Footer-listLink">
                        {linkList.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href="#"
                                    variant="second"
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
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
