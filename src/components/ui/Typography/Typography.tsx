import "./Typography.scss";

import { HTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

const typography = cva("Typography", {
    variants: {
        variant: {
            primary: "Typography--primary",
            textCenter: "Typography--textCenter",
        },
        size: {
            sm: "Typography--sm",
            md: "Typography--md",
            lg: "Typography--lg",
        },
    },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typography> {
    children?: ReactNode;
}

export const Typography = ({ variant, size, className = "", children, ...props }: TypographyProps) => {
    return (
        <p
            className={typography({ variant, size, className })}
            {...props}
        >
            {children}
        </p>
    );
};
