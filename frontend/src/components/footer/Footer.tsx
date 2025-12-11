
import { getFooterLinks } from "@/lib/strapi";
import FooterMenu from "./FooterMenu";


export default async function  Footer(){
    const footer = await getFooterLinks();

    return (
        <FooterMenu github={footer.github} linkedin={footer.linkedin} />

    );
}
