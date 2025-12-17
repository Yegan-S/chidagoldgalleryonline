import ProductGrid from "@/components/product/ProductGrid";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductCategoryPage({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold capitalize mb-6">
        {params.slug}
      </h1>

      <ProductGrid slug={params.slug} />
    </div>
  );
}