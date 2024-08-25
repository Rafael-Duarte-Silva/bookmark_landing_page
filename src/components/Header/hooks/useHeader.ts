import { RefObject, useEffect, useState } from "react";

export const useHeader = (popupRef: RefObject<HTMLElement | null>) => {
    const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);

    const handleOpenHamburger = (): void => {
        setIsOpenHamburger(!isOpenHamburger);
    };

    useEffect(() => {
        if (isOpenHamburger && popupRef.current) {
            const focusableElements: NodeListOf<HTMLElement> = popupRef.current.querySelectorAll("a");

            const firstElement: HTMLElement = focusableElements[0];
            const lastElement: HTMLElement = focusableElements[focus.length - 1];

            const handleModalKeys = (e: KeyboardEvent) => {
                if (e.key === "Tab") {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                } else if (e.key === "Escape") {
                    setIsOpenHamburger(false);
                }
            };

            firstElement.focus();

            addEventListener("keydown", handleModalKeys);

            return () => {
                removeEventListener("keydown", handleModalKeys);
            };
        }
    }, [isOpenHamburger]);

    return { isOpenHamburger, handleOpenHamburger };
};
