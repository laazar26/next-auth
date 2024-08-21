"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

// export async function login(value: any) {
//   console.log(value);
// }

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
