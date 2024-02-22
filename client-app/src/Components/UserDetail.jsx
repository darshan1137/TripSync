// import React from 'react';

// function UserDetail() {
//   return (
//     <div className='bg-gray-200  '>
//     <div className="flex flex-col items-center justify-center py-10 ">
//       <div className="flex flex-col items-center ">
//         <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
//           <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
//         </div>

//         <div className="mt-4 md:mt-0">
//           <h2 className="text-2xl font-bold">John McCulling</h2>

//         </div>
//       </div>

{
  /* <div className="mt-8 flex flex-col items-center">
        <h3 className="text-lg font-semibold">User Details</h3>
        <ul className="list-disc pl-4">
          <li>Full Name: John McCulling</li>
          <li>Contact Info: user@example.com</li>
          <li>Instagram ID: johnmcculling</li>
          
        </ul>
</div> */
}
{
  /* <div className="w-full shrink-0 grow-0 basis-auto py-10 lg:w-5/12">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  contact me
                </p>
               
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  Sales questions
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  sales@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Press</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  press@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Bug report</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  bugs@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
     */
}

//    <>
//      <div className="flex items-center justify-center h-screen">
//       <section className="py-16 bg-blueGray-200">
//         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
//           <div className="px-6">
//             <div className="flex flex-wrap justify-center">
//               <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
//                 <div className="relative">
//                   <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
//                 <div className="py-6 px-3 mt-32 sm:mt-0">
//                   <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
//                     Connect
//                   </button>
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4 lg:order-1">
//                 <div className="flex justify-center py-4 lg:pt-4 pt-8">
//                   <div className="mr-4 p-3 text-center">
//                     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
//                   </div>
//                   <div className="mr-4 p-3 text-center">
//                     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
//                   </div>
//                   <div className="lg:mr-4 p-3 text-center">
//                     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mt-12">
//               <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//                 Jenna Stones
//               </h3>
//               <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//                 <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
//                 Los Angeles, California
//               </div>
//               <div className="mb-2 text-blueGray-600 mt-10">
//                 <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
//               </div>
//               <div className="mb-2 text-blueGray-600">
//                 <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
//               </div>
//             </div>
//             <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
//               <div className="flex flex-wrap justify-center">
//                 {/* <div className="w-full lg:w-9/12 px-4">
//                   <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
//                     An artist of considerable range, Jenna the name taken by
//                     Melbourne-raised, Brooklyn-based Nick Murphy writes,
//                     performs and records all of his own music, giving it a
//                     warm, intimate feel with a solid groove structure. An
//                     artist of considerable range.
//                   </p>
//                   <a href="#pablo" className="font-normal text-pink-500">Show more</a>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   </>

//   );
// }

// export default UserDetail;
import React, { useState, useEffect } from "react";
import { db } from "../Firebase/config"; // Assuming firebase.js is in the same directory
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function UserDetail() {
  const [userEmail, setUserEmail] = useState("");
  const auth = getAuth();
  const userEmailFromStorage = localStorage.getItem("email");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("email", "==", JSON.parse(userEmailFromStorage))
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setUserEmail(doc.data().email);
        });
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };

    if (userEmailFromStorage) {
      fetchUserDetails();
    }
  }, [userEmailFromStorage]);

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center">
          <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            {/* Display a placeholder image */}
            <img
              src="https://via.placeholder.com/150"
              loading="lazy"
              alt="Placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-4 md:mt-0">
            {/* Display the user's email */}
            <h2 className="text-2xl font-bold">{userEmail}</h2>
          </div>
        </div>
        {/* Render other user details here */}
      </div>
    </div>
  );
}

export default UserDetail;
