import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { contactUsSchema } from "../constants/contactUsSchema";

import { ContactUsSchema } from "../types/ContactUsSchema";

export const useFooterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactUsSchema>({
        resolver: zodResolver(contactUsSchema),
        mode: "onBlur",
    });

    const handleContactUs: SubmitHandler<ContactUsSchema> = (data) => {
        console.log(`Email send: ${data.email}`);
    };

    return { register, handleSubmit, errors, handleContactUs };
};
