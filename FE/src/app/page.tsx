"use client";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { images } from "../assets/";

export default function Home() {
  return (
    <main>
      {images.map((image, index) => (
        <Sidebar
          src={image.src}
          alt={image.alt}
          key={`${image.alt}-${index}`}
        />
      ))}
    </main>
  );
}
