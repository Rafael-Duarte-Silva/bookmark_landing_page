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

interface TitleProps
    extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof title> {
    titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children?: ReactNode;
}

export const Title = ({
    variant,
    className = "",
    titleType = "h1",
    children,
    ...props
}: TitleProps) => {
    return (
        <>
            {titleType === "h1" && (
                <h1
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h1>
            )}
            {titleType === "h2" && (
                <h2
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h2>
            )}
            {titleType === "h3" && (
                <h3
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h3>
            )}
            {titleType === "h4" && (
                <h4
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h4>
            )}
            {titleType === "h5" && (
                <h5
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h5>
            )}
            {titleType === "h6" && (
                <h6
                    className={title({ variant, className })}
                    {...props}
                >
                    {children}
                </h6>
            )}
        </>
    );
};
