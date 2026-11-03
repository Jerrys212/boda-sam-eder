import { wedding } from "@/lib/wedding";

export default function Itinerary() {
  const { itinerary } = wedding;
  return (
    <section className="day" id="day">
      <div className="sec-head reveal">
        <span className="lbl">{itinerary.label}</span>
        <h2>{itinerary.title}</h2>
      </div>
      <div className="day-grid">
        <figure className="day-fig wipe-holder">
          <div className="day-arch wipe">
            <img
              src={itinerary.image.src}
              alt={itinerary.image.alt}
              className="dimg plx on"
              data-speed="-14"
            />
          </div>
          <figcaption className="cap">{itinerary.caption}</figcaption>
        </figure>
        <div className="program stagger">
          {itinerary.events.map((event) => (
            <div className="ev" key={event.time}>
              <span className="dot"></span>
              <span className="tl-time">{event.time}</span>
              <div className="tl-name">{event.name}</div>
              <div className="tl-note">{event.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
