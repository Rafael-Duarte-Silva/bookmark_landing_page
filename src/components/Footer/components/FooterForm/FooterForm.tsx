"use client";

import "./FooterForm.scss";

import { IconError } from "./components/icons/IconError";
import { Button } from "@/components/ui/Button/Button";

import { useFooterForm } from "./hooks/useFooterForm";

export const FooterForm = () => {
    const { register, handleSubmit, errors, handleContactUs } = useFooterForm();

    return (
        <form
            className="Footer-form"
            onSubmit={handleSubmit(handleContactUs)}
        >
            <label className={`Footer-label ${errors.email?.message ? "is-Footer-label-invalid" : ""}`}>
                <input
                    autoComplete="email"
                    className="Footer-input"
                    placeholder="Enter your email address"
                    type="email"
                    {...register("email")}
                />
                {errors.email?.message && (
                    <>
                        <IconError className="Footer-iconError" />
                        <strong className="Footer-errorMessage">{errors.email?.message}</strong>
                    </>
                )}
            </label>
            <Button
                size="md"
                variant="second"
                type="submit"
            >
                Contact Us
            </Button>
        </form>
    );
};
