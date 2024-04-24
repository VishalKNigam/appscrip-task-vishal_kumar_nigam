import Link from "next/link";

export default function NavItems() {
  return (
    <nav className="large-screen-nav-container">
      <Link href="/">Shop</Link>
      <Link href="/page-in-progress">Skills</Link>
      <Link href="/page-in-progress">Stories</Link>
      <Link href="/page-in-progress">About</Link>
      <Link href="/page-in-progress">Contact Us</Link>
    </nav>
  );
}
