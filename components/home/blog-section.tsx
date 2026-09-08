import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Why Crochet Flowers Make the Perfect Lasting Gift",
    date: "Sep 8, 2026",
    image: "/single-products/prod5.png",
  },
  {
    id: 2,
    title: "How Scented Candles Create a Cozy Atmosphere",
    date: "Sep 5, 2026",
    image: "/single-products/prod1.png",
  },
];

export default function BlogSection() {
  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-[1140px] gap-8 px-5 lg:grid-cols-[1fr_2fr] lg:px-0">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.8px]">
            Stories, Ideas & Inspiration
          </h2>

          <p className="mt-4 max-w-[270px] text-[10px] leading-5 text-gray-500">
            Discover thoughtful gift ideas, learn more about handmade crochet,
            and find inspiration for creating warm and meaningful moments with
            candles and handcrafted gifts.
          </p>

          <Link
            href="/blog"
            className="mt-6 w-fit rounded border border-[#bfc3ff] px-4 py-2 text-[9px] text-[#6268e8] transition hover:bg-[#6268e8] hover:text-white"
          >
            Explore more
          </Link>

          <div className="mt-6 flex gap-5 text-[#a6a9b3]">
            <button
              aria-label="Previous"
              className="transition hover:text-[#6268e8]"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              aria-label="Next"
              className="transition hover:text-[#6268e8]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[1.5]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-[11px] font-semibold leading-4 text-gray-800">
                  {blog.title}
                </h3>

                <p className="mt-3 text-[8px] text-gray-400">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
