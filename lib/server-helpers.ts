import "server-only";

import { cookies } from "next/headers";

export const getIsAuth = async () => {
  return Boolean(await getToken());
};

export const getToken = async () => {
  const cookieData = await cookies();
  return cookieData.get("jwt")?.value;
};
