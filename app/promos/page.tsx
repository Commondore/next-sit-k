import { fetchPromos } from "@/api/strapi";
import { getToken } from "@/lib/server-helpers";

export default async function PromosPage() {
  const token = await getToken();
  const promos = await fetchPromos(token!);
  console.log(promos);

  return (
    <div>
      <h1 className="text-6xl text-center my-8">Страница Акции</h1>
    </div>
  );
}
