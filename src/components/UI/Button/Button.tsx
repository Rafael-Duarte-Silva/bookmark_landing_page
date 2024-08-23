import "./Button.scss";

import { ButtonHTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

const button = cva("Button", {
    variants: {
        variant: {
            primary: "Button--primary",
            second: "Button--second",
        },
        size: {
            sm: "Button--sm",
            md: "Button--md",
        },
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {
    children?: ReactNode;
}

export const Button = ({
    variant,
    size,
    className = "",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={button({ variant, size, className })}
            {...props}
        >
            {children}
        </button>
    );
};
