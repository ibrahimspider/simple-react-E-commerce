import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBox from "../components/ProductBox";

export default function CategoriseProduct() {
  const params = useParams();
  const basUrl = "https://fakestoreapi.com/products/category";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${basUrl}/${params.CategoryName}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <section className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold uppercase">
              {params.CategoryName}
            </h2>
            <span className=" inline-block w-12 h-[2px] bg-blue-500"></span>
          </div>
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
