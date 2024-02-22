import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';

// import '../Excel/list.csv'

export default function Maps() {
  //const XLSX = require('xlsx');
  const locationIQApiKey = '3b907f7a7e924a80a6908267def45354';
  // const excelFilePath = "C:/Users/Shravani/Documents/GitHub/ForestHub/src/Excel/list.csv";


  const [forestLocations, setForestLocations] = useState([]);

  useEffect(() => {
    const fetchForestLocations = async () => {
      try {
        
          
        const forestLocationsArray = [
          "Taj Mahal, Agra",
          "Jaipur City Palace, Jaipur",
          "Gateway of India, Mumbai",
          "Golden Temple, Amritsar",
          "Hawa Mahal, Jaipur",
          "Kerala Backwaters, Alleppey",
          "Mysore Palace, Mysuru",
          "Varanasi Ghats, Varanasi",
          "Victoria Memorial, Kolkata",
          "Qutub Minar, Delhi",
          "Elephanta Caves, Mumbai",
          "Amer Fort, Jaipur",
          "Lotus Temple, Delhi",
          "Red Fort, Delhi",
          "Hampi, Karnataka",
          "Khajuraho Temples, Madhya Pradesh",
          "Ajanta and Ellora Caves, Maharashtra",
          "Rann of Kutch, Gujarat",
          "Leh-Ladakh, Jammu and Kashmir",
          "Valley of Flowers, Uttarakhand",
          "Kanyakumari, Tamil Nadu",
          "Meenakshi Amman Temple, Madurai",
          "Gir National Park, Gujarat",
          "Andaman and Nicobar Islands",
          "Dudhsagar Falls, Goa",
          "Athirappilly Falls, Kerala",
          "Jaisalmer Fort, Rajasthan",
          "Nubra Valley, Ladakh",
          "Jim Corbett National Park, Uttarakhand",
          "Sundarbans National Park, West Bengal",
          "Rishikesh, Uttarakhand",
          "Goa Beaches, Goa",
          // Add more as needed
        ];
     
        
        

        // Fetch coordinates for each forest location
        const promises = forestLocationsArray.map(async (location) => {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${locationIQApiKey}`
          );
          const firstResult = response.data.results[0];
          const { lat, lng } = firstResult.geometry;

          return { name: location, lat, lon: lng };
        });

        // Wait for all promises to resolve
        const resolvedLocations = await Promise.all(promises);

        setForestLocations(resolvedLocations);
      } catch (error) {
        console.error('Error fetching forest locations:', error);
      }
    };

    fetchForestLocations();
  }, []);

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  

  const handleShare = (displayName) => {
    const shareText = `Checkout this forest location : ${displayName}`;
    const shareURL = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n' + shareURL)}`);
  }

  let currentDate = new Date();

// Add one day to the current date
let currentDatePlusOne = new Date(currentDate);
currentDatePlusOne.setDate(currentDate.getDate() + 1);

// Format the date as YYYY-MM-DD
let formattedDate = currentDatePlusOne.toISOString().split('T')[0];

  return (
    <div className='h-screen w-screen'>
      {forestLocations.length > 0 && (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

          {forestLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lon]} icon={customMarkerIcon}>
              <Popup>
                {location.name}
                <div>
                  {/* <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(location.name)}`} target="_blank" rel="noopener noreferrer">
                    <button className='bg-green-800 p-2 m-2 text-white'>Know More</button>
                  </a> */}
                  <a href={`https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&searchDep=${location.name}&dest=${location.name}&destValue=${location.name}&depCity=New%20Delhi&initd=searchwidget_landing_${location.name}_notheme&dateSearched=${formattedDate}&glp=true&pdo=true&rooms=2%2C0%2C0%2C0%2C%2C%2C&duration=2_10&affiliate=MMT##page_header`} target="_blank" rel="noopener noreferrer">
                    <button className='bg-green-800 p-2 m-2 text-white'>Know More</button>
                  </a>
                  <button className='bg-green-800 p-2 m-2 text-white' onClick={() => handleShare(location.name)}>Share</button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
