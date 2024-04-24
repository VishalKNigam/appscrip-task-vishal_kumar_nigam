"use client";

import { useState } from "react";

export default function MetaMuseLinks() {
  const [metaValue, setMetaValue] = useState("");

  const handleChange = (e) => setMetaValue(e.target.value);

  return (
    <div className="meta-muse-container">
      <h3>mettā muse</h3>
      <ul className="footer-links">
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
      </ul>
    </div>
  );
}
