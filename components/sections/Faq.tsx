import { wedding } from "@/lib/wedding";

export default function Faq() {
  const { faq } = wedding;
  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="sec-head reveal">
          <span className="lbl">{faq.label}</span>
          <h2 className="serif">{faq.title}</h2>
        </div>
        <div className="stagger">
          {faq.items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question} <span className="tick">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
