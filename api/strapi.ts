import ky from "ky";
import { AuthData, ICredentials, IUser } from "@/interfaces/auth";
import { IPromo } from "@/interfaces/promo";
import { IRestaurant, StrapiType } from "@/interfaces/restaurant";

const strapiApi = ky.create({ prefixUrl: process.env.NEXT_PUBLIC_STRAPI_API });

export const fetchRestaurants = async (populate?: string): Promise<StrapiType<IRestaurant[]>> => {
  return strapiApi
    .get("restaurants", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};

export const postLogin = (credentials: ICredentials): Promise<AuthData> => {
  return strapiApi
    .post("auth/local", {
      json: credentials,
    })
    .json();
};

export const fetchUser = (token: string): Promise<IUser> => {
  return strapiApi
    .get("users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};

export const fetchPromos = async (token: string): Promise<StrapiType<IPromo>> => {
  return strapiApi
    .get("promos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};
