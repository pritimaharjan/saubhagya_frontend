import Image from "next/image";

const instagramImages = [
  "/images/instagram/1.jpg",
  "/images/instagram/2.jpg",
  "/images/instagram/3.jpg",
  "/images/instagram/4.jpg",
  "/images/instagram/5.jpg",
  "/images/instagram/6.jpg",
  "/images/instagram/7.jpg",
  "/images/instagram/8.jpg",
  "/images/instagram/9.jpg",
  "/images/instagram/10.jpg",
  "/images/instagram/11.jpg",
  "/images/instagram/12.jpg",
];

export default function InstagramSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
        <div className="mb-7 text-center">
          <h2 className="text-[28px] font-bold tracking-[-0.8px]">Instagram</h2>

          <p className="mt-2 text-[11px] text-gray-500">
            @yourinstagram_offical
          </p>
        </div>

        <div className="grid grid-cols-4 gap-1 sm:grid-cols-6">
          {instagramImages.map((image, index) => (
            <div key={image} className="relative aspect-square overflow-hidden">
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                sizes="(max-width: 640px) 25vw, 16vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
