import Link from "next/link";

export default function SmallScreenNavItems({ isNavExpanded, toggleNav }) {
  const expandClass = isNavExpanded && "expand";

  return (
    <nav className={`small-screen-nav-container ${expandClass}`}>
      <Link href="/profile" className="profile-sm" onClick={toggleNav}>
        Profile
      </Link>
      <Link href="/" onClick={toggleNav}>
        Shop
      </Link>
      <Link href="/page-in-progress" onClick={toggleNav}>
        Skills
      </Link>
      <Link href="/page-in-progress" onClick={toggleNav}>
        Stories
      </Link>
      <Link href="/page-in-progress" onClick={toggleNav}>
        About
      </Link>
      <Link href="/page-in-progress" onClick={toggleNav}>
        Contact Us
      </Link>

      {/* didn't implemented onChange event */}
      <select value="English" className="select-sm" onClick={toggleNav}>
        <option value="English">ENG</option>
        <option value="Hindi">HINDI</option>
      </select>
    </nav>
  );
}
