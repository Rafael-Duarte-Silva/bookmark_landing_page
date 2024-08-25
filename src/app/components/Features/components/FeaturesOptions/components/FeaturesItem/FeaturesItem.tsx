import "./FeaturesItem.scss";

import { ChangeEvent } from "react";

type FeaturesItemProps = {
    id: string;
    value: number;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FeaturesItem = ({ id = "", value = 0, label = "", onChange }: FeaturesItemProps) => {
    return (
        <li className="Features-item">
            {value === 0 ? (
                <input
                    className="Features-input"
                    defaultChecked
                    id={id}
                    name="features"
                    onChange={onChange}
                    type="radio"
                    value={value}
                />
            ) : (
                <input
                    className="Features-input"
                    defaultChecked
                    id={id}
                    name="features"
                    onChange={onChange}
                    type="radio"
                    value={value}
                />
            )}

            <label
                className="Features-label"
                htmlFor={id}
                tabIndex={0}
            >
                {label}
            </label>
        </li>
    );
};
