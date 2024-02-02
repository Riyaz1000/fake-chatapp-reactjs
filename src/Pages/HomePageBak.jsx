import { useState } from "react";

const HomePageBak = () => {
  const [name, setName] = useState("Name");
  const whatsAppName = (e) => {
    setName(e.target.value);
  };
  const [message, setMessage] = useState("message");
  const whatsAppMessage = (e) => {
    setMessage(e.target.value);
  };

  // customer message
  const [customerMessage, setCustomerMessage] = useState("customer message");
  const whatsAppCustomerMessage = (e) => {
    setCustomerMessage(e.target.value);
  };

  const [networkProvider, setNetworkProvider] = useState("5G");
  const whatsAppNetwork = (e) => {
    setNetworkProvider(e.target.value);
  };

  const [time, setTime] = useState("3.00 PM");
  const whatsAppTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="ml-32">
      <div>
        <div className="grid md:grid-cols-3 ml-44 mt-10">
          <div className="">
            <div className="bg-[#194f92] p-10 rounded-lg space-y-5 shadow-xl">
              <p className=" font-poppins text-gray-200 text-3xl">
                Add Your Details
              </p>

              <div>
                <label className="block font-poppins text-gray-200 mb-0.5">
                  Name
                </label>
                <input
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-[280px]"
                  placeholder="name"
                  onChange={whatsAppName}
                />
              </div>
              <div>
                <label className="block font-poppins text-gray-200 mb-0.5  ">
                  Message
                </label>
                <input
                  className="border border-gray-700 px-4 py-1 outline-none rounded w-[280px]"
                  placeholder="message"
                  onChange={whatsAppMessage}
                />
              </div>
              <div>
                <label className="block font-poppins text-gray-200 mb-0.5">
                  Network Provider
                </label>
                <select
                  onChange={whatsAppNetwork}
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-[280px]"
                >
                  <option>--select--</option>
                  <option value={"5G"}>2G</option>
                  <option value={"3G"}>3G</option>
                  <option value={"4G"}>4G</option>
                  <option value={"5G"}>5G</option>
                </select>
              </div>

              <div>
                <label className="block font-poppins text-gray-200 mb-0.5">
                  Time
                </label>
                <input
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-[280px] "
                  placeholder="time"
                  onChange={whatsAppTime}
                />
              </div>

              <div>
                <label className="block font-poppins text-gray-200 mb-0.5">
                  Reply Message
                </label>
                <input
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-[280px] "
                  placeholder="Your reply"
                  onChange={whatsAppCustomerMessage}
                />
              </div>
            </div>
          </div>
          {/* output */}
          <div className=" bg-[#ddd4cd]  mt-10 md:mt-0 md:mb-20 md:ml-5 max-w-lg w-[500px] h-[513px] rounded">
            <div className="bg-[#115e59]   py-2 w-full border-b-2 border-gray-300 rounded">
              <div className="flex  px-5">
                <p className="text-white font-poppins font-thin">
                  {networkProvider}
                </p>
                <p className="font-bold ml-36">
                  <span className="text-white font-poppins font-thin">
                    {time}
                  </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="ml-48"
                >
                  <path
                    fill="#ffffff"
                    d="M172 72v128a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m28-52a12 12 0 0 0-12 12v168a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-80 80a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path fill="#ffffff" d="M7 22V4h3V2h4v2h3v18zM9 8h6V6H9z" />
                </svg>
                {/* <p className="font-medium">{batteryPercent}%</p> */}
              </div>
              <div className="pb-2 flex mt-3 items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="mt-1 ml-4 items-center"
                >
                  <path
                    fill="#ffffff"
                    d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
                  />
                </svg>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="image"
                  className="w-12 rounded-full ml-1.5 items-center  "
                />

                <p className="text-center text-lg font-semibold ml-2 items-center  capitalize">
                  <span className="text-white">{name ? name : "Name"}</span>
                </p>
                {/* video */}
                <div className="flex fixed ml-[360px] gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    className=""
                  >
                    <path
                      fill="#ffffff"
                      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"
                    />
                  </svg>
                  {/* audio */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded p-3">
              {/* <p className="bg-gray-100 w-fit px-1 py-1 rounded">
                {message ? message : "Type your text"}
              </p> */}
              <div className="relative text-xs text-wrap bg-white w-48 text-y-clip rounded-bl-lg rounded-br-lg rounded-tr-lg px-3 py-3">
                {message ? message : "Type your text"}
              </div>
            </div>
            {/* <div className="relative text-xs text-wrap bg-[#128c7e] ml-3 w-60 text-x-clip rounded-bl-lg rounded-br-lg rounded-tr-lg px-3 py-3">
              {message ? customerMessage : "Type your text"}
            </div> */}
            <div className="relative text-xs float-right text-white bg-[#128c7e] w-48 text-pretty rounded-bl-lg rounded-br-lg rounded-tl-lg px-3 py-3 mr-3 mt-3">
              {message ? customerMessage : "Type your text"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageBak;
