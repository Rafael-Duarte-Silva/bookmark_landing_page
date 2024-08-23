import { useState } from "react";

export const useHeader = () => {
    const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);

    const handleOpenHamburger = (): void => {
        setIsOpenHamburger(!isOpenHamburger);
    };

    return { isOpenHamburger, handleOpenHamburger };
};
