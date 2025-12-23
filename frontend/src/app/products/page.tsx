import Link from "next/link";

export default function ProductsPage(){

    return(
        
          <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Our Products</h1>

      <ul className="space-y-2">
        <li><Link href="/products/bangles">Bangles</Link></li>
        <li><Link href="/products/chain">Chain</Link></li>
        <li><Link href="/products/rings">Rings</Link></li>
        <li><Link href="/products/earrings">Earrings</Link></li>
      </ul>
    </div>

    );
}