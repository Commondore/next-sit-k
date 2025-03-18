"use server";

import { postLogin } from "@/api/strapi";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
  const identifier = formData.get("identifier") as string;
  const password = formData.get("password") as string;

  const userData = await postLogin({
    identifier: identifier,
    password: password,
  });

  if (userData) {
    const cookieData = await cookies();

    cookieData.set("jwt", userData.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  revalidatePath("/");
  redirect("/");
};

export const logoutAction = async () => {
  (await cookies()).delete("jwt");

  revalidatePath("/");
  redirect("/");
};
