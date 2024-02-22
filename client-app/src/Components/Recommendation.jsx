import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate ,Link} from "react-router-dom";
function Recommendation() {

  useEffect(()=>{
    handlePredict()
  },[]);
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    try {
      const data = {
        features: [20,50,30,10000,20], //A,B,C,Budget,age
      };

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setPrediction(result.prediction);
      console.log('Prediction:', result.prediction);
    } catch (error) {
      console.error('Error during prediction:', error);
    }
  };



  const navigate=useNavigate();
  const [rec_cards, setrec_cards] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);
  const handleClick = (clickedItem) => {
    // Handle the click event with the clicked item data
    // console.log("Item clicked:", clickedItem);
    navigate(`/location?destination=${clickedItem.name}`);

    // Add your logic here based on the clicked item
  };
  const fetchData = () => {
    axios.get('http://localhost:5000/recommendation') // Include the specific endpoint
      .then(response => {
        // Handle the response data
        var data = response.data
        // console.log(data);
        var tempcards = data.map(item => {
          return (
            <div className="py-5" onClick={() => handleClick(item)} key={item.id}>
            <div className="py-5 flex mx-20 px-20 flex-wrap md:flex-nowrap border-t-2 border-b-2 border-l-2 border-r-2 border-blue-200 rounded-md shadow-lg">
                <div className="w-20 h-20 mx-auto my-5 sm:mx-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <img src={item.image_src} className="w-full h-full object-cover rounded-full" alt="Item" />
                </div>
                <div className="md:flex-grow xl:mx-10 sm:mx-4 md:mx-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-4">
                      {item.name}
                    </h2>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="ml-2 text-lg text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  <p className="leading-relaxed">
                    {truncateText(item.info, 30)}
                  </p>
                  <p className="font-medium">Category:{item.category}</p>

                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Know More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )
        })
        setrec_cards(tempcards);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      }).finally(() => {
        setLoading(false);
      });
  };

  const truncateText = (text, numWords) => {
    const words = text.split(' ');
    if (words.length > numWords) {
      return words.slice(0, numWords).join(' ') + '...';
    }
    return text;
  };
  if (loading) {
    return (

      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="flex flex-col text-center pt-10 w-full justify-center items-center">
        <h1 className="text-3xl font-bold py-10 sm:text-3xl text-black">Explore</h1>
      </div>
      <section className="text-gray-600 body-font overflow-hidden ">
        {/* <div className="container border-blue-700 px-30 py-24  sm:mx-2 md:mx- lg:mx-8 xl:mx-20 2xl:mx-20"> */}
        {/* <<<<<<< Updated upstream
        <div className="flex justify-center items-center h-screen">
          <div className="container  px-30 py-24  sm:mx-2 md:mx-2 lg:mx-8 xl:mx-20 2xl:mx-20">
            {/* <div className="-my-8  divide-y-2 divide-gray-100"> */}
        <div className="flex justify-center items-center lg:px-30 ">

          <div className="container  ">
            {/* <div className="-my-8  divide-y-2 divide-gray-100"> */}

            {rec_cards}
            {/* More items go here */}
          </div>
        </div>
        {/* </div> */}
      </section>
      <div className="flex justify-center items-center m-5">
       
       < Link
                to="/explore"
                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Explore
              </Link>
        
      </div>
    </div>

  );
}

export default Recommendation;