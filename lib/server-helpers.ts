"use server";

import { cookies } from "next/headers";

export const getIsAuth = async () => {
  return !!getToken();
};

export const getToken = async () => {
  const cookieData = await cookies();
  return cookieData.get("jwt")?.value;
};
