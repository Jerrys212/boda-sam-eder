import { wedding } from "@/lib/wedding";

export default function Locations() {
  const { locations } = wedding;
  return (
    <section className="travel" id="travel">
      <div className="travel-inner">
        <span className="lbl reveal">{locations.label}</span>
        <h2 className="reveal">{locations.venue}</h2>
        <div className="travel-head reveal">
          <div>
            <p className="addr">{locations.address}</p>
            <p className="travel-intro">{locations.intro}</p>
          </div>
          <a className="rbtn lite" href={locations.map.href} target="_blank" rel="noopener">
            <span>{locations.map.label}</span>
            <span className="ar">&#8594;</span>
          </a>
        </div>
        <div className="travel-cols">
          {locations.columns.map((column) => (
            <div className="reveal" key={column.label}>
              <span className="lbl">{column.label}</span>
              <h3>{column.title}</h3>
              <p>{column.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
