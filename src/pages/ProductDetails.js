import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const basUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${basUrl}/${params.ProductId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  },[]);

  const productList = [
    "Claritas est etiam processus dynamicus.",
    "Claritas est etiam processus dynamicus.",
    "Qui sequitur mutationem consuetudium lectorum.",
    "Claritas est etiam processus dynamicus.",
    "Qui sequitur mutationem consuetudium lectorum.   ",
  ];
  return (
    <>
      <section className="py-16 min-h-screen">
        <div className="max-w-7xl m-auto px-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* img */}
            <div className="">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2">
                  <ul>
                    <li className="p-3 border mb-2 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full"
                      />
                    </li>
                    <li className="p-3 border mb-2 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full"
                      />
                    </li>
                    <li className="p-3 border mb-2 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full"
                      />
                    </li>
                    <li className="p-3 border mb-2 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full"
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-span-10 border p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10/12 m-auto"
                  />
                </div>
              </div>
            </div>
            {/* content */}
            <div>
              <div className=" p-6 shadow-lg border">
                <div
                  className="flex justify-between gap-3
                 border-b pb-4 mb-3 font-semibold"
                >
                  <h3 className="text-2xl text-blue-700 uppercase ">
                    {product.title}{" "}
                    <span className="text-xs text-gray-500">
                      ( {product.category} )
                    </span>
                  </h3>
                  <h4 className="text-2xl text-red-500">LE {product.price}</h4>
                </div>
                <p className="text-gray-500 mb-3">
                  <span className="text-gray-800 font-semibold block">
                    description:
                  </span>
                  {product.description}
                </p>
                <ul className=" list-disc text-sm ml-4 text-gray-600">
                  {productList.map((list) => {
                    return <li className="mb-2">{list}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
