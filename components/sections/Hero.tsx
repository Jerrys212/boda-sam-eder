import Countdown from "@/components/client/Countdown";
import { wedding } from "@/lib/wedding";

export default function Hero() {
  const { hero } = wedding;
  return (
    <header className="hero" id="top">
      <div>
        <h1 className="serif hero-names">
          <span className="hl">
            <span>{hero.first}</span>
          </span>
          <span className="hero-amp">{hero.amp}</span>
          <span className="hl">
            <span>{hero.second}</span>
          </span>
        </h1>
        <div className="hero-meta">
          <span className="caps">{hero.details}</span>
          <Countdown />
        </div>
      </div>
      <figure className="hero-fig">
        <div className="hero-arch">
          <img src={hero.image.src} alt={hero.image.alt} id="heroImg" />
        </div>
        <figcaption className="cap">{hero.caption}</figcaption>
      </figure>
    </header>
  );
}
