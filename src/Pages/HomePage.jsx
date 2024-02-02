// import { useState } from "react";

// const HomePage = () => {
//   const [name, setName] = useState("");

//   //   const setNameMethod = (e) => {
//   //     const inputName = e.target.value;

//   //     if (inputName.length >= 2) {
//   //       setName(inputName);
//   //     } else {
//   //       setName("");
//   //     }

//   const setNameMethod = (e) => {
//     setName(e.target.value);
//   };
//   const [message, setMessage] = useState("message");
//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };
//   const [networkProvider, setNetworkProvider] = useState("LTE");
//   const handleNetworkProvider = (e) => {
//     setNetworkProvider(e.target.value);
//   };
//   const [batteryPercent, setBatteryPercent] = useState(10);
//   const handleBatteryPercent = (e) => {
//     setBatteryPercent(e.target.value);
//   };
//   const [time, setTime] = useState("3.00 PM");
//   const handleTime = (e) => {
//     setTime(e.target.value);
//   };
// };

// return (
//   <div className="p-5 bg-gray-600 m-10 rounded-md shadow-lg h-[500px] ">
//     <div className="flex">
//       <div className="">
//         <p className=" font-poppins text-white ml-[94px] mb-1 mt-3">
//           Enter your nameeee:
//         </p>
//         <div className="flex">
//           <div className=" ml-[92px] gap-10">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="px-4 py-2 rounded bg-gray-300 outline-none w-[300px] "
//               autoFocus
//               onChange={setNameMethod}
//             />
//           </div>
//         </div>
//         {/* receipents message */}
//         {/* <p className=" font-poppins text-white ml-[94px] mb-1 mt-3">
//             Enter recepients
//           </p> */}

//         {/* <div className="flex">
//             <div className=" ml-[92px] gap-10">
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="px-4 py-2 rounded bg-gray-300 outline-none w-[300px] "
//                 autoFocus
//                 onChange={setNameMethod}
//               />
//             </div>
//           </div> */}
//       </div>
//       {/* side layout */}

//       <div className="bg-[#065f46] p-5 ml-16  w-[500px] text-white font-poppins">
//         Enter Your Name
//         <div className="flex">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 448 512"
//             className="w-4"
//           >
//             <path
//               fill="#f5f5f5"
//               d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
//             />
//           </svg>
//           <img
//             src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//             className="w-9 rounded-full ml-2"
//           />
//           <div>
//             <p className=" text-indigo-50 ml-2 mt-1.5 capitalize">
//               {name === "" ? (
//                 ""
//               ) : (
//                 <span className="text-orange-500">{name}</span>
//               )}
//               <div className="flex ml-[300px]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   className="mr-2"
//                 >
//                   <path
//                     fill="#ffffff"
//                     d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"
//                   />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   className="/"
//                 >
//                   <path
//                     fill="#ffffff"
//                     d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
//                   />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   className="/"
//                 >
//                   <path
//                     fill="none"
//                     stroke="#ffffff"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
//                   />
//                 </svg>
//               </div>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="bg-red-100 p-5 mr-[460px] ml-[455px]">hjergierg</div>
//   </div>
// );

// export default HomePage;
