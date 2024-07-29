// app/page.tsx
import EmblaCarousel from "./components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <br></br>
    </div>
  );
}
