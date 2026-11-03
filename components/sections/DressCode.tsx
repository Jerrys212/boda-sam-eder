import { wedding } from "@/lib/wedding";

export default function DressCode() {
  const { dressCode } = wedding;
  return (
    <section className="dress">
      <div className="dress-grid">
        <div className="dress-copy">
          <div className="sec-head">
            <span className="lbl">{dressCode.label}</span>
            <h2>{dressCode.title}</h2>
          </div>
          {dressCode.paragraphs.map((paragraph) => (
            <p key={paragraph.text}>
              {"bold" in paragraph && <b>{paragraph.bold}</b>}
              {paragraph.text}
            </p>
          ))}
        </div>
        <figure className="dress-fig">
          <div className="drf1 wipe">
            <img src={dressCode.image.src} alt={dressCode.image.alt} className="plx" />
          </div>
        </figure>
      </div>
    </section>
  );
}
