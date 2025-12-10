import { getNavLinks, getCategories } from "@/lib/strapi";
import NavMenu from "./NavMenu";


export default async function Navbar() {
  const navItems = await getNavLinks();
  const categories = await getCategories();
  
  navItems.sort((a, b) => a.order - b.order);

  return (
    
    <NavMenu items={navItems} categories={categories}/>
    
  );
}