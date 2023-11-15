import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide_1 from "../assets/image/slide-image-1.webp";
import slide_2 from "../assets/image/slide-image-2.webp";
import slide_3 from "../assets/image/slide-image-3.webp";

const Hero = () => {
  const pictures = [
    {
      id: 1,
      title: "Clearance up to 30% off",
      thumbnail: slide_1,
    },
    {
      id: 2,
      title: "Plants collection",
      thumbnail: slide_2,
    },
    {
      id: 3,
      title: "Spring is coming",
      thumbnail: slide_3,
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {pictures.map((slide, index) => (
        <SwiperSlide key={slide.id ? slide.id : index}>
          <div className=" relative">
            <img
              src={slide?.thumbnail}
              alt={slide?.title}
              className="w-full min-w-[750px]"
            />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="text-white text-center px-10">
                <h3>NEW COLLECTION</h3>
                <h2 className="md:text-5xl text-3xl font-semibold py-3">
                  {slide.title}
                </h2>
                <a
                  href={1}
                  className=" inline-block px-6 py-2 bg-white text-black text-sm mt-4
                 tracking-widest border-2 border-white transition-all
                  hover:bg-transparent hover:text-white"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
