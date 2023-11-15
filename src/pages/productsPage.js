import { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";

export default function ProductsPage() {
  const basUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(basUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="py-16 min-h-screen">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            <span className="text-blue-600">Our</span> Products
          </h2>
          <span className=" inline-block w-12 h-[2px] bg-blue-500 m-auto"></span>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            {products.map((product) => {
              return <ProductBox product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
