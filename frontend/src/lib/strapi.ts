const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function getNavLinks(): Promise <
{
label: string; url: string; order: number
} [] 
>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigation-links?sort=order:asc`, {
    headers: {
      "Content-Type": "application/json",
    },
    
  });

  const data = await res.json();
  return data.data.map((item: any) => ({
    label: item.label,
    url: item.url,
    order: item.order,
  }));
}

export async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?sort=order:asc`,
      { cache: "no-store", headers: { "Content-Type": "application/json" } }
    );

    if (!res.ok) {
      console.error("Failed to fetch categories:", res.statusText);
      return [];
    }

    const data = await res.json();

    return data.data?.map((item: any) => ({
      name: item.Name,
      slug: item.slug,
      order: item.order,
    })) || [];
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
}

         {/* Footer single type*/ }

export async function getFooterLinks (){

  const res =  await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer`, {
    headers: {
      "Content-Type": "application/json",
    },
      });
    
   const data = await res.json();

   return {
    github: data.data.github,
    linkedin: data.data.linkedin,
   }

   {/* Products collection type*/ }
}
export async function getProductsByCategory(slug: string) {
  const res = await fetch(
 
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`,
    { cache: "no-store" }
  );

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    images: item.images.data.map((img: any) => ({
      url: `${STRAPI_URL}${img.url}`,
    })),
  }));
}