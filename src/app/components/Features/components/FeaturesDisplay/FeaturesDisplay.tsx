import "./FeaturesDisplay.scss";

import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { Typography } from "@/components/ui/Typography";

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
                <Typography className="Features-ContainerText-text">{feature.text}</Typography>
                <Button
                    asChild
                    className="Features-link"
                    size="sm"
                    variant="primary"
                >
                    <a href="#">More Info</a>
                </Button>
            </div>
        </div>
    );
};
