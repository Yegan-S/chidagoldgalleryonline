import ProductGrid from "@/components/product/ProductGrid";

type Props = {
  params: Promise < {
    slug: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const {slug} = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold capitalize mb-6">
        {slug}
      </h1>

      <ProductGrid slug={slug} />
    </div>
  );
}