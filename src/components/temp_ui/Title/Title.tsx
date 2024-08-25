import "./Title.scss";

import { HTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

const title = cva("Title", {
    variants: {
        variant: {
            primary: "Title--primary",
            second: "Title--second",
            third: "Title--third",
            secondTextCenter: "Title--secondTextCenter",
        },
    },
});

interface TitleProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof title> {
    titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children?: ReactNode;
}

export const Title = ({ variant, className = "", titleType: TitleType = "h1", children, ...props }: TitleProps) => {
    return (
        <TitleType
            className={title({ variant, className })}
            {...props}
        >
            {children}
        </TitleType>
    );
};
