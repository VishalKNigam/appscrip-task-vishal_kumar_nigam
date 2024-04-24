"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const changeEmail = (event) => setEmail(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="email"
        value={email}
        placeholder="Enter Your Email Id"
        onChange={changeEmail}
      />
      <buttom type="submit" className="subscribe-btn">
        Subscribe
      </buttom>
    </form>
  );
}
