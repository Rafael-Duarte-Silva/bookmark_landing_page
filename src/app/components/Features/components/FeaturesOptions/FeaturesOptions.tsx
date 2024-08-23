import "./FeaturesOptions.scss";

import { ChangeEvent } from "react";

import { FeaturesItem } from "./components/FeaturesItem";

import { featuresItemList } from "./constants/featuresItemList";

type FeaturesOptionsProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FeaturesOptions = ({ onChange }: FeaturesOptionsProps) => {
    return (
        <div className="Features-containerList">
            <ul className="Features-list">
                {featuresItemList.map((featuresItem, index) => (
                    <FeaturesItem
                        id={featuresItem.id}
                        key={index}
                        label={featuresItem.label}
                        onChange={onChange}
                        value={index}
                    />
                ))}
            </ul>
            <hr className="Features-separator" />
        </div>
    );
};
