import "./FeaturesDisplay.scss";

import { Link } from "@/components/UI/Link";
import { Title } from "@/components/UI/Title";
import { Typography } from "@/components/UI/Typography";

import { FeaturesList } from "../../types/FeaturesList";

type FeaturesDisplayProps = {
    feature: FeaturesList;
};

export const FeaturesDisplay = ({ feature }: FeaturesDisplayProps) => {
    return (
        <div className="Features-containerFeatures">
            <div className="Features-containerIllustration">
                <feature.Illustration className="Features-illustration" />
            </div>

            <div className="Features-ContainerText">
                <Title
                    titleType="h3"
                    variant="second"
                >
                    {feature.title}
                </Title>
                <Typography className="Features-ContainerText-text">
                    {feature.text}
                </Typography>
                <Link
                    className="Features-link"
                    href=""
                    size="sm"
                    variant="primary"
                >
                    More Info
                </Link>
            </div>
        </div>
    );
};
