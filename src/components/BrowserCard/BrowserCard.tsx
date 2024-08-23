import "./BrowserCard.scss";

import { ElementType } from "react";

import { Button } from "../UI/Button";
import { BgDots } from "./components/Icons/BgDots";

type BrowserCardProps = {
    logo: ElementType;
    title: JSX.Element;
    text: string;
};

export const BrowserCard = ({
    logo: Logo,
    title,
    text = "",
}: BrowserCardProps) => {
    return (
        <article className="BrowserCard">
            <Logo className="BrowserCard-logo" />
            {title}
            <p className="BrowserCard-text">{text}</p>
            <BgDots className="BrowserCard-dots" />
            <Button
                className="BrowserCard-button"
                size="md"
                variant="primary"
                type="button"
            >
                Add & Install Extension
            </Button>
        </article>
    );
};
