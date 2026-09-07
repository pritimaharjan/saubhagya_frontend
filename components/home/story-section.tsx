import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[28px] font-bold tracking-[-0.8px]">Our story</h2>

          <Link
            href="/our-story"
            className="text-[9px] font-medium text-[#6268e8]"
          >
            See all
          </Link>
        </div>
      </div>

      <div className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/images/story.jpg"
          alt="Our skincare story"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <button
          aria-label="Watch our story"
          className="absolute bottom-7 right-7 flex items-center gap-2 rounded bg-[#17191f] px-4 py-2 text-[9px] text-white"
        >
          Watch video
          <Play size={10} fill="currentColor" />
        </button>
      </div>
    </section>
  );
}
