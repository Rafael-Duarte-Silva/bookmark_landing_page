"use client";

import "./Header.scss";

import { IconFacebook } from "../Icons/IconFacebook";
import { IconTwitter } from "../Icons/IconTwitter";
import { LogoBookmarkDark } from "../Icons/LogoBookmarkDark";
import { LogoBookmarkLight } from "../Icons/LogoBookmarkLight";
import { Link } from "../UI/Link";
import { IconClose } from "./components/Icons/IconClose";
import { IconHamburger } from "./components/Icons/IconHamburger";

import { useHeader } from "./hooks/useHeader";

export const Header = () => {
    const { isOpenHamburger, handleOpenHamburger } = useHeader();

    return (
        <header className="Header">
            <nav
                aria-label="Site navigation"
                className="Header-nav"
            >
                <a
                    aria-label="Back to home page"
                    className={`Header-logo ${isOpenHamburger ? "is-Header-logo-invisible" : ""}`}
                    href=""
                >
                    <LogoBookmarkDark />
                </a>

                <div
                    className={`Header-backgroundMobile ${isOpenHamburger ? "" : "is-Header-backgroundMobile-hidden"}`}
                >
                    <div>
                        <div className="Header-containerMobile-header">
                            <a
                                aria-label="Back to home page"
                                href=""
                            >
                                <LogoBookmarkLight />
                            </a>

                            <button
                                aria-expanded={isOpenHamburger}
                                aria-label="Close mobile menu"
                                onClick={handleOpenHamburger}
                                type="button"
                            >
                                <IconClose />
                            </button>
                        </div>

                        <ul className="Header-list">
                            <li className="Header-item">
                                <Link
                                    className="Header-link"
                                    variant="fourth"
                                    href=""
                                >
                                    features
                                </Link>
                            </li>
                            <li className="Header-item">
                                <Link
                                    className="Header-link"
                                    variant="fourth"
                                    href=""
                                >
                                    pricing
                                </Link>
                            </li>
                            <li className="Header-item">
                                <Link
                                    className="Header-link"
                                    variant="fourth"
                                    href=""
                                >
                                    contact
                                </Link>
                            </li>
                            <li className="Header-item">
                                <Link
                                    className="Header-linkLogin"
                                    size="sm"
                                    variant="second"
                                    href=""
                                >
                                    login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="Header-containerMobile-footer">
                        <a
                            aria-label="Go to the Facebook website"
                            href="https://www.facebook.com/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <IconFacebook />
                        </a>

                        <a
                            aria-label="Go to the Twitter website"
                            href="https://x.com/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <IconTwitter />
                        </a>
                    </div>
                </div>

                <button
                    aria-expanded={isOpenHamburger}
                    aria-label="Open mobile menu"
                    className={`Header-buttonHamburger ${isOpenHamburger ? "is-invisible" : ""}`}
                    onClick={handleOpenHamburger}
                    type="button"
                >
                    <IconHamburger />
                </button>
            </nav>
        </header>
    );
};
