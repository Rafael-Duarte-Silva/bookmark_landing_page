import "./Faq.scss";

import { FaqItem } from "./components/FaqItem";
import { Link } from "@/components/UI/Link";
import { Title } from "@/components/UI/Title";
import { Typography } from "@/components/UI/Typography";

import { faqList } from "./constants/faqList";

export const Faq = () => {
    return (
        <section className="Faq">
            <Title
                titleType="h2"
                variant="secondTextCenter"
            >
                Frequently Asked Questions
            </Title>
            <Typography
                className="Faq-text"
                size="sm"
                variant="textCenter"
            >
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
            </Typography>

            <ul className="Faq-list">
                {faqList.map((faq, index) => (
                    <FaqItem
                        summary={faq.summary}
                        text={faq.text}
                        key={index}
                    />
                ))}
            </ul>

            <Link
                className="Faq-link"
                href=""
                size="sm"
                variant="primary"
            >
                More Info
            </Link>
        </section>
    );
};
