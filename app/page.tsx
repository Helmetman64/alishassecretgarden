// app/page.tsx
import Link from "next/link";
import EmblaCarousel from "./components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import styles from "./styles/Home.module.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Link href="/all-items" className={styles.button}>
        View All Items
      </Link>
    </div>
  );
}
