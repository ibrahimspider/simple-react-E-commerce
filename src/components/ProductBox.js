import { Link } from "react-router-dom";

export default function ProductBox(props) {
  return (
    <div className=" shadow-lg border rounded-lg">
      {/* img */}
      <div className="flex justify-center items-center relative min-h-[300px]">
        <img
          src={props.product.image}
          className="w-full max-w-[150px]"
          alt={props.product.title}
        />
        <span
          className=" inline-block absolute top-0 right-0 
        bg-blue-600 px-2 py-1 font-semibold rounded-bl-lg text-white"
        >
          $ {props.product.price}
        </span>
      </div>
      {/* content */}
      <div className="p-4">
        <Link to={`/product/${props.product.id}`}>
          <h3 className="text-lg font-semibold">
            {props.product.title.substring(0, 16)}..
          </h3>
        </Link>
        <Link to={`/category/${props.product.category}`}>
          <p className="text-blue-600 text-sm"> {props.product.category}</p>
        </Link>
      </div>
    </div>
  );
}
