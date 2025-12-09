import { getNavLinks } from "@/lib/strapi";
import NavMenu from "./NavMenu";


export default async function Navbar() {
  const navItems = await getNavLinks();
  
  navItems.sort((a, b) => a.order - b.order);

  return (
    
    <NavMenu items={navItems}/>
    
  );
}