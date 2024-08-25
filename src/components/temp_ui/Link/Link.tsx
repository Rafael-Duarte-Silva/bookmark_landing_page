import "./Link.scss";

import { AnchorHTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

const link = cva("Link", {
    variants: {
        variant: {
            primary: "Link--primary",
            second: "Link--second",
        },
    },
});

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
    children?: ReactNode;
}

export const Link = ({ variant, className = "", children, ...props }: LinkProps) => {
    return (
        <a
            className={link({ variant, className })}
            {...props}
        >
            {children}
        </a>
    );
};
