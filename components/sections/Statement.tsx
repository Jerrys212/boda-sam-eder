import { Fragment } from "react";
import { wedding } from "@/lib/wedding";

export default function Statement() {
  const { statement } = wedding;
  return (
    <section className="statement">
      <span className="lbl lead reveal">{statement.lead}</span>
      <h2 className="reveal">{statement.title}</h2>
      <span className="caps reveal">
        {statement.lines.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </span>
      <div className="flourish reveal">{statement.flourish}</div>
    </section>
  );
}
