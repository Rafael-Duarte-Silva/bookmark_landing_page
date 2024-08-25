"use client";

import "./Header.scss";

import { useRef } from "react";

import { IconFacebook } from "../icons/IconFacebook";
import { IconTwitter } from "../icons/IconTwitter";
import { LogoBookmarkDark } from "../icons/LogoBookmarkDark";
import { LogoBookmarkLight } from "../icons/LogoBookmarkLight";
import { Button } from "../ui/Button";
import { Link } from "../ui/Link";
import { IconClose } from "./components/icons/IconClose";
import { IconHamburger } from "./components/icons/IconHamburger";

import { linkList } from "@/constants/linkList";

import { useHeader } from "./hooks/useHeader";

export const Header = () => {
    const popupRef = useRef<HTMLDivElement>(null);
    const { isOpenHamburger, handleOpenHamburger } = useHeader(popupRef);

    return (
        <header className="Header">
            <nav
                aria-label="Site navigation"
                className="Header-nav"
            >
                <a
                    aria-label="Back to home page"
                    className={`Header-logo ${isOpenHamburger ? "is-Header-logo-invisible" : ""}`}
                    href="#"
                >
                    <LogoBookmarkDark />
                </a>

                <div
                    aria-modal="true"
                    aria-label="Modal site navigation"
                    className={`Header-backgroundMobile ${isOpenHamburger ? "" : "is-Header-backgroundMobile-hidden"}`}
                    id="dialog"
                    ref={popupRef}
                    role="dialog"
                >
                    <div>
                        <div className="Header-containerMobile-header">
                            <a
                                aria-label="Back to home page"
                                href="#"
                            >
                                <LogoBookmarkLight />
                            </a>

                            <button
                                aria-controls="dialog"
                                aria-expanded={isOpenHamburger}
                                aria-haspopup="dialog"
                                aria-label="Close mobile dialog"
                                onClick={handleOpenHamburger}
                                type="button"
                            >
                                <IconClose />
                            </button>
                        </div>

                        <ul className="Header-list">
                            {linkList.map((link, index) => (
                                <li
                                    className="Header-item"
                                    key={index}
                                >
                                    <Link
                                        className="Header-link"
                                        variant="primary"
                                        href="#"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                            <li className="Header-item">
                                <Button
                                    asChild
                                    className="Header-linkLogin"
                                    size="sm"
                                    variant="second"
                                >
                                    <a href="#">login</a>
                                </Button>
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
                    aria-controls="dialog"
                    aria-expanded={isOpenHamburger}
                    aria-haspopup="dialog"
                    aria-label="Open mobile dialog"
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
