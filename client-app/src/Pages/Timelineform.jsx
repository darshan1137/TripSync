import React,{useState,useEffect} from "react";
// import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db } from '../Firebase/config.js'
import { addDoc, collection } from 'firebase/firestore';

export default function Timelineform() {
    // const [email, setEmail] = useState(""); 
    const email = localStorage.getItem("email");
  const [destinations, setDestinations] = useState([
    {
      name: "",
      date: "",
      hotel: "",
      food: "",
      rating: "",
      review: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const newDestinations = [...destinations];
    newDestinations[index][field] = value;
    setDestinations(newDestinations);
  };

  const handleAddDestination = () => {
    setDestinations([
      ...destinations,
      { name: "", date: "", hotel: "", food: "", rating: "", review: "" },
    ]);
  };

  const handleRemoveDestination = (index) => {
    const newDestinations = [...destinations];
    newDestinations.splice(index, 1);
    setDestinations(newDestinations);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const timelineRef = collection(db, "timeline");
  
      const timelineData = {
        name: e.target.name.value,
        visitedState: e.target.state.value,
        startDate: e.target.sdate.value,
        endDate: e.target.edate.value,
        image: e.target.img.value,
        destinations: destinations,
        email: email,
        status:'notapproved'
      };
  
      await addDoc(timelineRef, timelineData);
  
      // Clear the form and reset state
      e.target.reset();
      setDestinations([
        { name: "", date: "", hotel: "", food: "", rating: "", review: "" },
      ]);
  
      // Notify the user about the successful submission
      alert("Your timeline will be displayed once admin approves it !");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // You can add additional error handling or user feedback here
      alert("Error submitting timeline. Please try again.");
    }
  };
  


  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Get in touch
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <form  onSubmit={handleSubmit} class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                name="name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter your name"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="state"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Visited State
              </label>
              <input
                name="state"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter the  name of state you visited "
              />
            </div>

            <div>
              <label
                for="sdate"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Start date
              </label>
              <input
                name="sdate"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter start date of your trip"
              />
            </div>

            <div>
              <label
                for="edate"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                End date
              </label>
              <input
                name="edate"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter end date of your trip"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="img"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Image*
              </label>
              <input
                name="img"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter a geotaged image of the visited place"
              />
            </div>

            <div>Destination details</div>

            {destinations.map((destination, index) => (
              <div key={index} className="sm:col-span-2">
                <label
                  htmlFor={`destination-name-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Destination name
                </label>
                <input
                  type="text"
                  id={`destination-name-${index}`}
                  name={`destination-name-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />

                <label
                  htmlFor={`destination-date-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Date
                </label>
                <input
                  type="text"
                  id={`destination-date-${index}`}
                  name={`destination-date-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.date}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                />

                <label
                  htmlFor={`destination-hotel-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Hotel
                </label>
                <input
                  type="text"
                  id={`destination-hotel-${index}`}
                  name={`destination-hotel-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.hotel}
                  onChange={(e) => handleChange(index, "hotel", e.target.value)}
                />

                <label
                  htmlFor={`destination-food-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Food
                </label>
                <input
                  type="text"
                  id={`destination-food-${index}`}
                  name={`destination-food-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.food}
                  onChange={(e) => handleChange(index, "food", e.target.value)}
                />

                <label
                  htmlFor={`destination-rating-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Rating
                </label>
                <input
                  type="text"
                  id={`destination-rating-${index}`}
                  name={`destination-rating-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.rating}
                  onChange={(e) => handleChange(index, "rating", e.target.value)}
                />

                <label
                  htmlFor={`destination-review-${index}`}
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Review
                </label>
                <input
                  type="text"
                  id={`destination-review-${index}`}
                  name={`destination-review-${index}`}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={destination.review}
                  onChange={(e) => handleChange(index, "review", e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => handleRemoveDestination(index)}
                  className="mt-2 inline-block rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base"
                >
                  Remove Destination
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddDestination}
              className="sm:col-span-2 inline-block rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
            >
              Add Destination
            </button>

            <div class="flex items-center justify-between sm:col-span-2">
              <button  type="submit" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>

              <span class="text-sm text-gray-500">*Required</span>
            </div>

            <p class="text-xs text-gray-400">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
