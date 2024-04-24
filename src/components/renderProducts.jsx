"use client";

import Image from "next/image";
import AddToFavouritesBtn from "./addToFavouritesBtn";
import { useAppScriptContext } from "@/context/appscriptContext";

export default function RenderProducts({ products }) {
  const { searchValue } = useAppScriptContext();

  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className="products-container">
      {searchProducts?.map((each) => (
        <li key={each.id} className="product-item">
          <div className="product-image-container">
            <Image
              src={each.image}
              width={200}
              height={200}
              alt={each.category}
            />
          </div>
          <h3 className="product-title">{formatProductTitle(each.title)}</h3>
          <p className="product-description">
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>
          <AddToFavouritesBtn />
        </li>
      ))}
    </ul>
  );
}

function formatProductTitle(title) {
  const newTitle = title.slice(0, 36).toUpperCase();
  return `${newTitle}${title.length > 36 ? "..." : ""}`;
}
