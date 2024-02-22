// import React from "react";

// function Banner() {
//   return (
//     <div className="overflow-hidden">
//       <div className="w-screen px-52 bg-white ">
//         <section className="relative bg-[url(https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
//           <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

//           <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
//             <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"></div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Banner;
import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import axios from 'axios';

function Banner() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/recommendation') // Replace with your API endpoint
      .then(response => {
        const data = response.data;
        const slideUrls = data.map(item => item.image_src);
        setSlides(slideUrls);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }).finally(() => {
        setLoading(false);
      });
  };

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  if (loading) {
    return (
    
      <div className="h-screen bg-white">
<div className="flex justify-center items-center h-full">
  <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
</div>
</div>
    );
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-300"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`slide-${index}`} className="w-screen" />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-5">
        <button onClick={previousSlide} className="text-white">
          <BsFillArrowLeftCircleFill size={32} />
        </button>
        <button onClick={nextSlide} className="text-white">
          <BsFillArrowRightCircleFill size={32} />
        </button>
      </div>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default Banner;
