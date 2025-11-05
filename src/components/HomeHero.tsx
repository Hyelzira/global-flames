import { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"; 
import bamaiyi from "../assets/images/dad.jpg";
import ben from "../assets/images/seated.jpg";
import bruce from "../assets/images/HOO.jpg";
import dad from "../assets/images/slider2.jpg";

const images = [bamaiyi, ben, bruce, dad];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background slideshow */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-[500px] object-cover shrink-0"
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-purple-700/40 flex flex-col items-center justify-center text-center text-white px-4 font-['Algerian', 'sans-serif']">
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          RAISING A PEOPLE OF POWER WHO WILL MANIFEST THE KINGDOM AND THE REALITIES OF THE FULLNESS OF CHRIST THROUGH THE SPIRIT
        </h1>
        <p className="max-w-2xl mb-6 text-lg md:text-xl">
          Discipling nations into the measure of the stature of the fullness of christ.
        </p>
        <div className="flex space-x-4">
          <a href="/about" className="bg-fuchsia-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-500 transition opacity-90 hover:opacity-100">
            LEARN MORE
          </a>
          <a href="/join-live" 
                className="border border-white text-white px-6 py-2 rounded-lg font-semibold transition opacity-90 hover:bg-purple-500">
            JOIN LIVE
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-3/4 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
      >
        <FiArrowLeftCircle size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-3/4 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
      >
        <FiArrowRightCircle size={28} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-purple-500 opacity-100" : "bg-gray-50 opacity-70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
