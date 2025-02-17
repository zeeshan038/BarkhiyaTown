import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
    onClick={onClick}
  >
    ❮
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
    onClick={onClick}
  >
    ❯
  </button>
);

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Array of YouTube video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/YF5cDFUJ7eY?si=Lvk1i_2ahjXlr41t",
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
  ];

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-40 px-4">
      <h1 className="md:text-3xl text-4xl lg:text-6xl font-bold text-center">
        What Makes Barkhiya Town <span className="text-[#256255]">Exceptional</span>?
      </h1>
      <div className="w-full lg:w-[800px] xl:w-[1400px] relative mt-6">
        <Slider {...settings}>
          {videoUrls.map((url, index) => (
            <div key={index} className="p-2">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src={url}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
