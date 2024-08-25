import "./Entry.scss";

import { IllustrationHero } from "./components/icons/IllustrationHero";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { Typography } from "@/components/ui/Typography";

export const Entry = () => {
    return (
        <section className="Entry">
            <div className="Entry-containerText">
                <Title
                    className="Entry-title"
                    titleType="h1"
                    variant="primary"
                >
                    A Simple Bookmark Manager
                </Title>
                <Typography className="Entry-text">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see
                    your sites load instantly. Try it for free.
                </Typography>
                <ul className="Entry-list">
                    <li>
                        <Button
                            asChild
                            size="lg"
                            variant="primary"
                        >
                            <a href="#">Get it on Chrome</a>
                        </Button>
                    </li>
                    <li>
                        <Button
                            asChild
                            size="lg"
                            variant="third"
                        >
                            <a href="#">Get it on Firefox</a>
                        </Button>
                    </li>
                </ul>
            </div>

            <div className="Entry-containerIllustration">
                <IllustrationHero className="Entry-illustration" />
            </div>
        </section>
    );
};
