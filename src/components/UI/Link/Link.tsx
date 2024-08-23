import "./Link.scss";

import { AnchorHTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

const link = cva("Link", {
    variants: {
        variant: {
            primary: "Link--primary",
            second: "Link--second",
            third: "Link--third",
            fourth: "Link--fourth",
            fifth: "Link--fifth",
        },
        size: {
            sm: "Link--sm",
            md: "Link--md",
        },
    },
});

interface LinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof link> {
    children?: ReactNode;
}

export const Link = ({
    variant,
    size,
    className = "",
    children,
    ...props
}: LinkProps) => {
    return (
        <a
            className={link({ variant, size, className })}
            {...props}
        >
            {children}
        </a>
    );
};
