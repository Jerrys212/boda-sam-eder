import { wedding } from "@/lib/wedding";

export default function Footer() {
  const { footer } = wedding;
  const { credit } = footer;
  return (
    <footer className="footer">
      <span className="caps reveal">{footer.date}</span>
      <div className="script footer-word reveal">
        {footer.first} <span className="amp">{footer.amp}</span> {footer.second}
      </div>
      <div className="byline">
        <span>
          {credit.template}
          <a target="_blank" rel="noopener" href={credit.author.href}>
            {credit.author.label}
          </a>
          {credit.middle}
          <a target="_blank" rel="noopener" href={credit.distributor.href}>
            {credit.distributor.label}
          </a>
        </span>
      </div>
    </footer>
  );
}
