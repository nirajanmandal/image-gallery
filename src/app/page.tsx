import Particles from "@/components/ui/particles";
import { ImageList } from "../components/ImageList";

export default function Home() {
  return (
    <main className="">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#000000"}
        refresh
      />
      <div className="flex items-center justify-center">
        <ImageList />
      </div>
    </main>
  );
}
