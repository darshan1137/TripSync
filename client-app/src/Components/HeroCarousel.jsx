import React, { useState, useEffect } from "react";
import mumbai from "../assets/Mumbai.png";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

// {
//   /* <div id= {slide${item.id}} className="carousel-item relative w-full h-full"> */
// }
// var herocards = data.map((item) => {
//   return (
//     <div
//       id={`slide${item.id}`}
//       className="h-96 relative w-screen flex items-center"
//     >
//       <div className="w-full opacity-80">
//         <img src={item.imgsrc} className="w-full h-full object-cover " />
//       </div>
//       {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"> */}
//       {/* <a href={`slide${item.id - 1}`} className="btn btn-circle">
//           ❮
//         </a> */}
//       {/* <a href={`slide${item.id + 1}`} className="btn btn-circle">
//           ❯
//         </a> */}
//       {/* </div> */}
//       <div className="absolute bottom-0 left-0 h-25vh bg-white w-screen flex-col ml-2 items-center justify-center sm:max-w-2xl gap-5  bg-opacity-60 ">
//         <div className="pl-32 h-full w-full flex flex-col justify-end p-2 mb-2 overflow-hidden bg-transparent-200">
//           <p className="text-left text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-6xl ">
//             {item.name}
//           </p>
//           <h1 className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800">
//             {item.info}
//           </h1>
//         </div>
//         <div className="flex w-full h-2/4 justify-start align-baseline mb-2 gap-2.5 sm:justify-start px-32">
//           <a
//             href="#"
//             className="inline-block rounded-lg h-full bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
//           >
//             Explore
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// });

// function HeroCarousel() {
//   const [activecard, setcard] = useState(0);

//   // useEffect(() => {
//   //   const intervalId = setInterval(() => {
//   //     setcard(prevActiveCard => prevActiveCard + 1);
//   //   }, 1000);

//   //   // Clean up the interval to avoid memory leaks
//   //   return () => clearInterval(intervalId);
//   // }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     // <div className="flex items-center justify-center h-screen">
//     <div className=" w-screen   h-auto">{herocards[activecard]}</div>
//     // </div>
//   );
// }

// export default HeroCarousel;

function HeroCarousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroCarousel