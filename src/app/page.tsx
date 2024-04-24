import RenderProducts from "../components/renderProducts";
import "./home.css";

const getProducts = async (): Promise<[]> => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return products;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="home-container">
      <div className="title-container">
        <h1>discover our products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
          dolores, architecto laboriosam repellendus sequi quae consequatur
          reiciendis sunt enim.
        </p>
      </div>
      <RenderProducts products={products} />
    </main>
  );
}
