import "./Faq.scss";

import { FaqItem } from "./components/FaqItem";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { Typography } from "@/components/ui/Typography";

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
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email
                us.
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

            <Button
                asChild
                className="Faq-link"
                size="sm"
                variant="primary"
            >
                <a href="#">More Info</a>
            </Button>
        </section>
    );
};
