import { z } from "zod";

export const contactUsSchema = z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("Whoops, make sure it's an email"),
});
