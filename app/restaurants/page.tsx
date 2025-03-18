import { fetchRestaurants } from "@/api/strapi";

export default async function RestaurantsPage() {
  const restList = await fetchRestaurants("images");
  return <h1>{restList.data[0].images[0].url}</h1>;
}
