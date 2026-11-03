import { wedding } from "@/lib/wedding";

export default function Navbar() {
  const { monogram, links } = wedding.nav;
  return (
    <nav className="navbar">
      <a className="mono" href="#top">
        {monogram.first}
        <span className="amp">{monogram.amp}</span>
        {monogram.second}
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
