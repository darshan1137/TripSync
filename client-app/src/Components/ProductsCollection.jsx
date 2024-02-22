import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductsCollection() {
  const [cards_list, setlist] = useState(null)
  
  const navigate=useNavigate();

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
        console.log(data);
        var tempcards = data.map(item => {
          return (
            <div className="py-5" onClick={() => handleClick(item)} key={item.id}>
            <li key={item.name}>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={item.image_src}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {item.name}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      Rs {item.budget}
                    </span>
                  </p>
                </div>
              </a>
            </li>
            </div>
          )
        }
        )
        setlist(tempcards)
      }
      )
  }
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Best Spots for your next Trip
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Explore the Extraordinary: Your Journey, Your Adventure, Your Way!
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {cards_list}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductsCollection;
