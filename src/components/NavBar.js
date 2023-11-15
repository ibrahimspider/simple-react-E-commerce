import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [toogleNav, setToogleNav] = useState(false);
  const toogleNavMethod = () => {
    setToogleNav(!toogleNav);
  };
  const navList = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
  ];
  const mobileList = navList.map((item) => {
    return (
      <li
        className=" transition-all hover:text-gray-500"
        onClick={() => {
          toogleNavMethod();
        }}
      >
        <Link className="w-full inline-block" to={item.to}>
          {item.name}
        </Link>
      </li>
    );
  });
  const diskList = navList.map((item) => {
    return (
      <li className=" transition-all hover:text-gray-500">
        <Link className="w-full inline-block" to={item.to}>
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className="py-4 shadow-lg bg-white relative z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* brand */}
        <div>
          <Link to="/">
            <h2 className="text-3xl font-semibold tracking-widest cursor-pointer ">
              BRAND
            </h2>
          </Link>
        </div>
        <ul className="md:flex hidden gap-4 capitalize">{diskList}</ul>
        {/* mobile nav */}
        <div className="md:hidden block">
          <button
            onClick={() => {
              toogleNavMethod();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-baseline-density-medium"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h16" />
              <path d="M4 12h16" />
              <path d="M4 4h16" />
            </svg>
          </button>
        </div>
        <ul
          className={
            "fixed md:hidden flex flex-col bg-white w-full h-full  gap-4 capitalize top-0 left-0 p-4 transition-all " +
            (toogleNav ? "left-0" : "-left-full")
          }
        >
          <li className="border-b pb-4 flex justify-between">
            <h2 className="text-3xl font-semibold tracking-widest cursor-pointer ">
              BRAND
            </h2>
            <button
              onClick={() => {
                toogleNavMethod();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </li>
          {mobileList}
        </ul>
      </div>
    </nav>
  );
}
