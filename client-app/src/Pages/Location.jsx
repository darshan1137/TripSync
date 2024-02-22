// import React from "react";

//admin.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { addDoc } from 'firebase/firestore';

import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  increment,
} from "firebase/firestore"; // Import Firestore functions as needed
import { db } from "../Firebase/config";
//admin.js

export default function Explore() {
  //admin.jsx

  const [timelineData, setTimelineData] = useState([]);
  const userEmail = localStorage.getItem("email");
  const userName = localStorage.getItem("username");

  // console.log(email)
useEffect(()=>{
  // incrementVisits()
},[])
  const incrementVisits = async () => {
    // console.log(category)
    // try {
      if (userEmail) {
        // Fetch user data using a query
        const documentRef = doc(db, "users", userName);

        const querySnapshot = await getDoc(documentRef);

        if (querySnapshot.exists()) {
          // If user document exists, retrieve the first document in the querySnapshot
          // const userDoc = querySnapshot.docs;

          // Retrieve user data
          // const userData = userDoc.data();
          const update = Number.parseInt(querySnapshot.data()["visit"]["A"]);
          const val = update + 1;
          console.log(querySnapshot.data());
          console.log(update);

          // querySnapshot.updateDoc({ "visit.A": update });
          // Increment visit counts
          // const updatedVisit = {
          //   A: (userData.visit?.A || 0) + 1,
          //   B: (userData.visit?.B || 0) + 1,
          //   C: (userData.visit?.C || 0) + 1,
          // };

          // Update user document with incremented visit counts
          await updateDoc(querySnapshot.ref, { [`visit.A`]: val });

          console.log("Visit values incremented successfully:", val);
        } else {
          console.error("User document not found");
        }
      } else {
        console.error("Email not found in local storage");
      }
    // } catch (error) {
    //   console.error("Error incrementing visits:", error.message);
    // }
  };
  useEffect(() => {
    const fetchNotApprovedData = async () => {
      try {
        const timelineRef = collection(db, "timeline");
        const notApprovedQuery = query(
          timelineRef,
          where("status", "==", "notapproved")
        );
        const snapshot = await getDocs(notApprovedQuery);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimelineData(data);
        // console.log("data:",data)
      } catch (error) {
        console.error("Error fetching not approved data:", error.message);
      }
    };

    fetchNotApprovedData();
  }, []); // Fetch data when the component mounts

  const handleApprove = async (id) => {
    try {
      const timelineDocRef = doc(db, "timeline", id);
      await updateDoc(timelineDocRef, { status: "approved" });
      // Update local state to reflect the change
      setTimelineData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, status: "approved" } : item
        )
      );
      // await fetchUserTimeline();

      alert("Timeline approved succesfully!");
    } catch (error) {
      console.error("Error approving timeline item:", error.message);
    }
  };

  const handleDiscard = async (id) => {
    try {
      const timelineDocRef = doc(db, "timeline", id);
      await deleteDoc(timelineDocRef);
      // Update local state to reflect the deletion
      setTimelineData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Timeline discarded succesfully!");
    } catch (error) {
      console.error("Error discarding timeline item:", error.message);
    }
  };
  const [searchedData, setSearchedData] = useState([]);
  const location = useLocation();
  const destination = new URLSearchParams(location.search).get("destination");

  useEffect(() => {
    // Fetch data based on the destination query parameter
    fetchLocationData(destination);
    
  }, [destination]);

  const [citydata, setcitydata] = useState(null);
  const fetchLocationData = (destination) => {
    var formData = { destination: destination };
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        // Handle the response data
        console.log(response.data);

        // axios.get('http://localhost:5000/location?destination=${destination}') // Include the specific endpoint
        //   .then(response => {
        //     // Handle the response data
        var data = response.data;
            // console.log(data[0]);
        // incrementVisits(data[0].category)

        var tempcitydata = data.map((item) => {
          return (
            <div className="px-52">
              <h1 class="mb-4 text-center text-5xl font-bold text-gray-800 sm:text-3xl md:mb-6">
                {item.name}
              </h1>

              <blockquote class="mb-3 md:mb-6 border-l-2 md:border-l-4 pl-2 md:pl-4 italic text-gray-700 sm:text-xl md:text-2xl md:pl-6">
                “This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.”
              </blockquote>

              <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                <img
                  src={item.image_src}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div className="px-20 py-10">
                <p class="mb-3 md:mb-6 border-l-2 md:border-l-4 pl-2 md:pl-4 italic text-gray-700 sm:text-xl md:text-2xl md:pl-6">
                  {item.info}
                  <br />
                  <br />
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is or otherwise generated. It may be used to
                  display a sample of fonts or generate text for testing. Filler
                  text is dummy text which has no meaning however looks very
                  similar to real text.
                </p>
              </div>
            </div>
          );
        });
        setcitydata(tempcitydata);
      });
  };

  //admin.jsx
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen px-4 md:px-8">
          {citydata}
          <h2 class="mb-2 text-xxl font-semibold text-gray-800 sm:text-4xl md:mb-4 my-5 flex items-center justify-center">
            Food Specialities
          </h2>
          <div className="my-5 flex items-center justify-center">
            <div class="flex space-x-20">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:light-blue-50 dark:border-gray-700">
                <a href="#">
                  <img
                    src="https://media.istockphoto.com/id/1186685544/photo/indian-chicken-vindaloo-in-a-brass-wok-ready-to-be-served-on-a-grunge-metal-wood-and-gold.jpg?s=1024x1024&w=is&k=20&c=rEtwDBclGWxS2zLBHXEGmBo3piVlEk4MKrwpgxb1LRI="
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-900">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-cyan-800">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:light-blue-5 dark:border-gray-700">
                <a href="#">
                  <img
                    src="https://media.istockphoto.com/id/1186685544/photo/indian-chicken-vindaloo-in-a-brass-wok-ready-to-be-served-on-a-grunge-metal-wood-and-gold.jpg?s=1024x1024&w=is&k=20&c=rEtwDBclGWxS2zLBHXEGmBo3piVlEk4MKrwpgxb1LRI="
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-900">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-cyan-800">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:light-blue-5 dark:border-gray-700">
                <a href="#">
                  <img
                    src="https://media.istockphoto.com/id/1186685544/photo/indian-chicken-vindaloo-in-a-brass-wok-ready-to-be-served-on-a-grunge-metal-wood-and-gold.jpg?s=1024x1024&w=is&k=20&c=rEtwDBclGWxS2zLBHXEGmBo3piVlEk4MKrwpgxb1LRI="
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-900">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-cyan-800">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div my-5>
            <h2 class="mb-2 text-xxl font-semibold text-gray-800 sm:text-4xl md:mb-4 my-5 flex items-center justify-center">
              Artifacts
            </h2>

            <div class="flex space-x-4 py-15 px-15 mx-10 ">
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:light-blue-50 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://media.istockphoto.com/id/1135361606/photo/famous-terracotta-handicrafts-of-bishnupur-on-display-for-sale.webp?b=1&s=170667a&w=0&k=20&c=i8X-eZ_JatOUAR9vnG12lzRpALYVlGuC5SmOCwEyaDg="
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:light-blue-50 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://media.istockphoto.com/id/1135361606/photo/famous-terracotta-handicrafts-of-bishnupur-on-display-for-sale.webp?b=1&s=170667a&w=0&k=20&c=i8X-eZ_JatOUAR9vnG12lzRpALYVlGuC5SmOCwEyaDg="
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:light-blue-50 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://media.istockphoto.com/id/1135361606/photo/famous-terracotta-handicrafts-of-bishnupur-on-display-for-sale.webp?b=1&s=170667a&w=0&k=20&c=i8X-eZ_JatOUAR9vnG12lzRpALYVlGuC5SmOCwEyaDg="
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* REVIEW  */}

          <h2 class="mb-2 text-xxl font-semibold text-gray-800 sm:text-4xl md:mb-4 my-5 flex items-center justify-center">
            Reviews
          </h2>
          <div className="my-5 px-30 flex items-center justify-center">
            <div class="w-full max-w-screen-lg  my-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-teal-50 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-cyan-900 dark:text-cyan-900">
                  Latest Customers
                </h5>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-3 my-2 sm:py-4">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-cyan-900">
                          Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-cyan-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li class="py-3 my-2 sm:py-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-cyan-900">
                          Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-cyan-900">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li class="py-3 my-2  sm:py-4">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-2.jpg"
                          alt="Michael image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-cyan-900">
                          Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-cyan-900">
                        $67
                      </div>
                    </div>
                  </li>
                  <li class="py-3 my-2  sm:py-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-4.jpg"
                          alt="Lana image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-cyan-900">
                          Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-cyan-900">
                        $367
                      </div>
                    </div>
                  </li>
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-cyan-900">
                          Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-cyan-900">
                        $2367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default location;
