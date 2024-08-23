"use client";

import "./Features.scss";

import { FeaturesDisplay } from "./components/FeaturesDisplay";
import { FeaturesOptions } from "./components/FeaturesOptions";
import { Title } from "@/components/UI/Title";
import { Typography } from "@/components/UI/Typography";

import { useFeaturesDisplay } from "./hooks/useFeaturesDisplay";

export const Features = () => {
    const { feature, handleChangeFeatureValue } = useFeaturesDisplay();

    return (
        <section className="Features">
            <div className="Features-Header">
                <Title
                    titleType="h2"
                    variant="secondTextCenter"
                >
                    Features
                </Title>
                <Typography
                    className="Features-text"
                    size="md"
                    variant="textCenter"
                >
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </Typography>

                <FeaturesOptions onChange={handleChangeFeatureValue} />
            </div>

            <FeaturesDisplay feature={feature} />
        </section>
    );
};
