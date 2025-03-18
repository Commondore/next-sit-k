"use server";

import { postLogin } from "@/api/strapi";
import { cookies } from "next/headers";

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
};
