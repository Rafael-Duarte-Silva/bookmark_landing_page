import "./FaqItem.scss";

import { IconArrow } from "../Icons/IconArrow";
import { Typography } from "@/components/UI/Typography";

type FaqItemProps = {
    summary: string;
    text: string;
};

export const FaqItem = ({ summary = "", text = "" }: FaqItemProps) => {
    return (
        <li className="Faq-item">
            <details className="Faq-question">
                <summary className="Faq-summary">
                    {summary}

                    <IconArrow className="Faq-icon" />
                </summary>
                <Typography
                    className="Faq-question-text"
                    size="sm"
                    variant="primary"
                >
                    {text}
                </Typography>
            </details>
        </li>
    );
};
