import { z } from "zod";

import { contactUsSchema } from "../constants/contactUsSchema";

export type ContactUsSchema = z.infer<typeof contactUsSchema>;
