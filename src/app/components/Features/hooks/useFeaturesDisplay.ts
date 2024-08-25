import { ChangeEvent, useState } from "react";

import { featuresList } from "../constants/featuresList";

export const useFeaturesDisplay = () => {
    const [featureValue, setFeatureValue] = useState<number>(0);

    const handleChangeFeatureValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setFeatureValue(parseInt(e.target.value));
    };

    return { feature: featuresList[featureValue], handleChangeFeatureValue };
};
