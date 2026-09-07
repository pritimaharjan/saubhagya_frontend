import Image from "next/image";
import Link from "next/link";

const promotions = [
  {
    title: "Relaxing &\nPampering",
    description: "Pariatur ad nisi ex tempor ea",
    image: "/images/promotion-1.jpg",
  },
  {
    title: "Smooth &\nBright Skin",
    description: "Pariatur ad nisi ex tempor ea",
    image: "/images/promotion-2.jpg",
  },
];

export default function PromotionSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[28px] font-bold tracking-[-0.8px]">
            Event promotion
          </h2>

          <Link
            href="/offers"
            className="text-[9px] font-medium text-[#6268e8]"
          >
            See all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {promotions.map((promotion) => (
            <article
              key={promotion.title}
              className="relative h-[190px] overflow-hidden rounded-lg"
            >
              <Image
                src={promotion.image}
                alt={promotion.title.replace("\n", " ")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/5" />

              <div className="relative z-10 flex h-full flex-col justify-center px-7">
                <h3 className="whitespace-pre-line text-[22px] font-bold leading-[1.05] text-[#343942]">
                  {promotion.title}
                </h3>

                <p className="mt-3 text-[10px] text-gray-600">
                  {promotion.description}
                </p>

                <Link
                  href="/offers"
                  className="mt-4 w-fit rounded bg-[#6268e8] px-5 py-2 text-[9px] text-white"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
