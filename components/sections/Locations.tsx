import { wedding } from "@/lib/wedding";

export default function Locations() {
  const { locations } = wedding;
  return (
    <section className="travel" id="travel">
      <div className="travel-inner">
        <span className="lbl reveal">{locations.label}</span>
        <h2 className="reveal">{locations.title}</h2>
        <div className="travel-head reveal">
          <p className="travel-intro">{locations.intro}</p>
        </div>
        <div className="travel-cols">
          {locations.places.map((place) => (
            <div className="reveal" key={place.name}>
              <span className="lbl">{place.schedule}</span>
              <h3>{place.name}</h3>
              <p>{place.address}</p>
              <a className="rbtn lite" href={place.mapHref} target="_blank" rel="noopener">
                <span>{locations.mapLabel}</span>
                <span className="ar">&#8594;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
