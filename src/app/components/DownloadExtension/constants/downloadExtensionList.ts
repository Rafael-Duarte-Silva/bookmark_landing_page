import { ElementType } from "react";

import { LogoChrome } from "../components/icons/LogoChrome";
import { LogoFirefox } from "../components/icons/LogoFirefox";
import { LogoOpera } from "../components/icons/LogoOpera";

type DownloadExtensionList = {
    logo: ElementType;
    title: string;
    text: string;
};

export const downloadExtensionList: DownloadExtensionList[] = [
    {
        logo: LogoChrome,
        title: "Add to Chrome",
        text: "Minimum version 62",
    },
    {
        logo: LogoFirefox,
        title: "Add to Firefox",
        text: "Minimum version 55",
    },
    {
        logo: LogoOpera,
        title: "Add to Opera",
        text: "Minimum version 46",
    },
];
