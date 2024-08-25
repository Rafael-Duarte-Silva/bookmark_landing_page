import "./DownloadExtension.scss";

import { BrowserCard } from "@/components/BrowserCard";
import { Title } from "@/components/ui/Title";
import { Typography } from "@/components/ui/Typography";

import { downloadExtensionList } from "./constants/downloadExtensionList";

export const DownloadExtension = () => {
    return (
        <section className="DownloadExtension">
            <Title
                titleType="h2"
                variant="secondTextCenter"
            >
                Download the extension
            </Title>
            <Typography
                className="DownloadExtension-text"
                size="lg"
                variant="textCenter"
            >
                We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us
                to prioritize.
            </Typography>

            <ul className="DownloadExtension-list">
                {downloadExtensionList.map((downloadExtension, index) => (
                    <li
                        className="DownloadExtension-item"
                        key={index}
                    >
                        <BrowserCard
                            logo={downloadExtension.logo}
                            title={
                                <Title
                                    className="BrowserCard-title"
                                    titleType="h3"
                                    variant="third"
                                >
                                    {downloadExtension.title}
                                </Title>
                            }
                            text={downloadExtension.text}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
