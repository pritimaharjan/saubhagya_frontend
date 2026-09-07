import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/data";

const mainprodicts = products;
console.log(mainprodicts, "mainprodicts");
export default function ProductSection() {
  // const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-[-0.8px]">
            Our products
          </h2>

          <div className="mt-6 flex justify-center gap-2">
            <button className="rounded-md bg-[#6268e8] px-6 py-2 text-[10px] text-white">
              Best-sellers
            </button>

            <button className="rounded-md px-6 py-2 text-[10px] text-[#6268e8]">
              New products
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {mainprodicts.map((product) => (
            <article key={product.id} className="group">
              <Link href={`/products/${product.slug}`}>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f7f7f7]">
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-[#ec5c92] px-2.5 py-1 text-[8px] font-medium text-white">
                    Best-seller
                  </span>

                  <Image
                    src={product.images[0].src}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Details */}
                <div className="mt-3">
                  <h3 className="text-[12px] font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="mt-1 truncate text-[10px] text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[17px] font-bold">
                        ${product.price}
                      </span>

                      {/* <span className="ml-1 text-[11px] text-gray-400 line-through">
                      ${product.oldPrice}
                    </span> */}
                    </div>

                    <button
                      aria-label={`Add ${product.name} to cart`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#bfc3ff] text-[#6268e8] transition hover:bg-[#6268e8] hover:text-white"
                    >
                      <ShoppingCart size={13} />
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
