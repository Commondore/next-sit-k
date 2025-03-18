import { IRestaurant, StrapiType } from "@/interfaces/restaurant";
import ky from "ky";

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
