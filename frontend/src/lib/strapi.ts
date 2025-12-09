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