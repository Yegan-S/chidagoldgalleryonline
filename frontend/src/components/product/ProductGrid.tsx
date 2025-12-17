
"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/lib/strapi";

export default function ProductGrid({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => getProductsByCategory(slug),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((product: any) => (
        <div key={product.id} className="border rounded-lg p-2">
          <img
            src={process.env.NEXT_PUBLIC_STRAPI_URL + product.images[0].url}
            className="rounded"
          />
          <p className="mt-2 text-sm">{product.title}</p>
        </div>
      ))}
    </div>
  );
}