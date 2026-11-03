import { wedding } from "@/lib/wedding";

export default function Breather() {
  const { breather } = wedding;
  return (
    <section className="breather">
      <div className="breather-inner">
        <div className="bf1 wipe">
          <img src={breather.main.src} alt={breather.main.alt} className="plx" />
        </div>
        <div className="bf2 wipe">
          <img src={breather.inset.src} alt={breather.inset.alt} className="plx" data-speed="26" />
        </div>
        <span className="note reveal">{breather.note}</span>
      </div>
    </section>
  );
}
