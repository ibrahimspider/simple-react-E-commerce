import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchedUrl from "../assets/image/categories-bg.webp";
export default function CaregoriseSection() {
  const basUrl = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${basUrl}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const categorieBox = categories.map((categorie, index) => {
    return (
      <div
        key={index}
        className="bg-[image:var(--image-url)] bg-cover p-1 shadow-md rounded-md bg-center"
        style={{ "--image-url": `url(${fetchedUrl})` }}
      >
        <Link to={`/category/${categorie}`}>
          <div
            className="flex items-center justify-center border-2
         border-white h-40 rounded-md  bg-[rgba(0,0,0,0.7)] text-center
         text-white transition-all hover:text-blue-600
         "
          >
            <p className="text-xl font-semibold  uppercase">{categorie}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {categorieBox}
          </div>
        </div>
      </section>
    </>
  );
}
