import "./Button.scss";

import { ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const button = cva("Button", {
    variants: {
        variant: {
            primary: "Button--primary",
            second: "Button--second",
            third: "Button--third",
        },
        size: {
            sm: "Button--sm",
            md: "Button--md",
            lg: "Button--lg",
            xl: "Button--xl",
        },
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    asChild?: boolean;
    children?: ReactNode;
}

export const Button = ({ variant, size, className = "", asChild = false, children, ...props }: ButtonProps) => {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={button({ variant, size, className })}
            {...props}
        >
            {children}
        </Comp>
    );
};
