import "./Entry.scss";

import { IllustrationHero } from "./components/Icons/IllustrationHero";
import { Link } from "@/components/UI/Link";
import { Title } from "@/components/UI/Title";
import { Typography } from "@/components/UI/Typography";

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
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </Typography>
                <ul className="Entry-list">
                    <li>
                        <Link
                            href=""
                            size="md"
                            variant="primary"
                        >
                            Get it on Chrome
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            size="md"
                            variant="third"
                        >
                            Get it on Firefox
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="Entry-containerIllustration">
                <IllustrationHero className="Entry-illustration" />
            </div>
        </section>
    );
};
