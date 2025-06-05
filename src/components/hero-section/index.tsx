"use client";

import { heroSliderData } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 6000 })]);
  return (
    <section className="overflow-hidden relative z-[-1] mx-auto h-fit" ref={emblaRef}>
      <div className="flex h-full">
        {heroSliderData?.map((slider) => (
          <div key={slider.id} className="relative flex-grow-0 flex-shrink-0 basis-full h-[50vh]">
            <Image src={slider.image} alt="slider-image" fill className="object-cover" sizes="100vw" priority />
          </div>
        ))}
      </div>
    </section>
  );
}
