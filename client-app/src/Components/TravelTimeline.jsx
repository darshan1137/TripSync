import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions as needed
import { db } from "../Firebase/config.js";
import { Link } from "react-router-dom";


function TravelTimeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  // Fetch user's timeline data based on the logged-in user's email (replace 'userEmail' with actual variable)
  const email = localStorage.getItem("email");
  const fetchUserTimeline = async () => {
    try {
      const timelineRef = collection(db, "timeline");
      const userTimelineQuery = query(
        timelineRef,
        where("email", "==", email),
        where("status", "==", "approved")
      );
      const snapshot = await getDocs(userTimelineQuery);

      const data = snapshot.docs.map((doc) => doc.data());
      setTimelineData(data);
    } catch (error) {
      console.error("Error fetching timeline:", error.message);
      // Handle error or show user feedback
    }
  };

  useEffect(() => {
    // Fetch user's timeline data when the component mounts
    fetchUserTimeline();
  }, []); // Empty dependency array ensures the effect runs once

  const handleStateClick = (state) => {
    // Toggle the selected state
    setSelectedState((prevState) => (prevState === state ? null : state));
  };

  return (
    <>
      <div>
      <h2 class="text-3xl font-bold text-center text-white-100 mb-6">
                Track your TimeLine
              </h2>
        {/* Render State Cards */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {timelineData.map((timelineItem) => (
            <div
              key={timelineItem.visitedState}
              onClick={() => handleStateClick(timelineItem.visitedState)}
              style={{
                // border: "1px solid #ccc",
                margin: "5px",
                padding: "10px",
                cursor: "pointer",
                width: "116%",
              }}
            >
             
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-7 mx-auto  md:w-4/5 flex flex-wrap">
                  <div class="flex relative pt-10 pb-20 sm:items-center md:w-4/5 mx-auto bg-cyan-50 rounded-md">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        {/* <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg> */}
                        <img
                          src="https://img.freepik.com/premium-vector/creative-map-location-vector-icon-design_807689-11.jpg?w=740"
                          alt=""
                        />
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                          {timelineItem.visitedState}
                          {/* Date: {destination.date} */}
                        </h2>
                        <p class="leading-relaxed">
                          <p>Start date: {timelineItem.startDate}</p>
                          <p>End date {timelineItem.endDate}</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* Render Dropdown Timeline of Destinations */}
        {selectedState && (
          <div>
            {/* <h3>{selectedState} Timeline</h3> */}
            {timelineData
              .filter((item) => item.visitedState === selectedState)
              .map((stateItem) => (
                <div key={stateItem.visitedState}>
                  {/* <h4>{stateItem.visitedState} Destinations</h4> */}
                  <ul>
                    {stateItem.destinations.map((destination) => (
                      <li key={destination.name}>
                        <section class="text-gray-600 body-font">
                          <div class="container px-5 py-7 mx-auto flex flex-wrap">
                            <div class="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto bg-white  rounded-md">
                              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                                1
                              </div>
                              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-12 h-12"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                  </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                                    {destination.name}
                                    Date: {destination.date}
                                  </h2>
                                  <p class="leading-relaxed">
                                    <p>
                                   
                                        {/* <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-6 h-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 2C7.03 2 3 6.03 3 11c0 2.05.81 4.43 2.13 6.72l.5.64 5.37 5.37c.39.39 1.02.39 1.41 0L18.37 18.4c.39-.39.39-1.02 0-1.41L12.4 11.5l-.77-.98C10.33 9.95 10 9.01 10 8c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.01-.33 1.95-.87 2.52l-.77.98-5.37 5.36c-1.5-1.2-3-2.5-3-4.36 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.85-.87 3.2-2.26 4.68l2.25 2.25c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-14-14c-.39-.39-1.02-.39-1.41 0L2.39 7.2c-.39.39-.39 1.02 0 1.41L6.5 12.5l.72.92C6.29 14.43 6 12.8 6 11c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9c-2.01 0-3.86-.65-5.37-1.74l1.95-1.95c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L6.5 17.09l-2.47 2.47c1.41 1.67 3.22 3.08 5.14 4.08.29.14.62.14.91 0 1.92-.99 3.73-2.42 5.14-4.08l4.47-4.47c1.41 1.67 2.81 3.15 4.06 4.66l.77.98.75-.94c1.38-1.64 2.44-3.68 2.91-6.02C20.79 9.45 16.67 6 12 6z"
                                          />
                                        </svg> */}
                                    
                                      Hotel: {destination.hotel}
                                    </p>
                                    <p>Food: {destination.food}</p>
                                    <p>Rating: {destination.rating}</p>
                                    <p>Review: {destination.review}</p>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Add more destination details as needed */}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
        <div className="flex justify-center items-center m-5">
        <Link
                to="/timelineform"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Add TimeLine
              </Link>
      </div>
      </div>
    </>
  );
}

export default TravelTimeline;