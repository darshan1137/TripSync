import React from "react";
import UserDetail from "../Components/UserDetail";
import ChallengeCards from "./../Components/ChallengeCards";
import TravelTimeline from "./../Components/TravelTimeline";
import UserBlogs from "../Components/UserBlogs";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleSignout = () => {
    try {
      // Remove email and userName from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("userName");

      // Additional sign-out logic if needed

      alert("Signedout Successfully!");
      navigate("/login");

      // console.log('Sign-out successful');
      // Redirect or perform any other actions after sign-out
    } catch (error) {
      console.error("Error during sign-out:", error.message);
      // Handle sign-out error if needed
    }
  };

  return (
    <>
      {/* <div className="bg-gray-100 h-screen flex items-center justify-cente py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          
          <div className="md:flex md:items-center md:space-x-4">
            
            
            
          </div>

          
        </div>
        
      </div>
    </div> */}
      <div className="px-52 bg-white">
        <UserDetail />

        {/* Timeline section */}
        <div className="mt-8 md:mt-0">
          <TravelTimeline />
        </div>

        {/* Blogs section */}
        <div className="mt-12">
          <UserBlogs />
        </div>

        {/* Challenges section */}
        <div className="mt-12">
          <ChallengeCards />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={handleSignout}
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-gray-900 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Signout
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
