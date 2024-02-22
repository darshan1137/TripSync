import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"; // Import Firestore functions as needed
import { db } from "../Firebase/config"

const Admin = () => {
    const [timelineData, setTimelineData] = useState([]);

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
  
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
    <ul className="space-y-4">
      {timelineData.map((item) => (
        <li key={item.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p>Status: {item.status}</p>
          <p>Visited State: {item.visitedState}</p>
          <p>Start Date: {item.startDate}</p>
          <p>End Date: {item.endDate}</p>
          <p>Image: {item.image}</p>
          {/* Add more details as needed */}
          <ul className="mt-2">
            {item.destinations.map((destination, index) => (
              <li key={index} className="border-t pt-2 mt-2">
                <h4 className="text-lg font-semibold mb-1">{destination.name}</h4>
                <p>Date: {destination.date}</p>
                <p>Food: {destination.food}</p>
                <p>Hotel: {destination.hotel}</p>
                <p>Rating: {destination.rating}</p>
                <p>Review: {destination.review}</p>
              </li>
            ))}
          </ul>
          <div className="flex mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-green-600"
              onClick={() => handleApprove(item.id)}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => handleDiscard(item.id)}
            >
              Discard
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Admin;
