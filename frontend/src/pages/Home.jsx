import { useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehicalPanel";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control form position
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [vehicalPanel, SetVehicalPanel] = useState(false)

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-[400px] h-[750px] rounded-md shadow-md relative overflow-hidden">
        {/* Header */}

        {/* Map Section */}
        <div
          className={`w-full h-[750px] ${isExpanded ? "hidden" : ""
            } transition-all duration-300`}
        >
          <h2 className="text-2xl font-bold text-black p-6 absolute z-10">Uber</h2>
          <img
            src="/public/maps.png"
            alt="Map"
            className="bg-contain w-full h-[750px]"
          />
        </div>

        {/* Form Section */}
        <div
          className={`flex flex-col absolute w-full bg-white p-6 transition-all duration-300 ${isExpanded ? "top-0 h-full" : "bottom-0 h-[25%]"
            }`}>
          {/* Form */}
          <div className={`transition-all duration-300 ${isExpanded ? "h-[25%]" : "h-full"}`}>
            <h4 className="text-2xl font-semibold">Find a Trip</h4>
            <form>
              <div className="mt-4">
                <input
                  type="text"
                  onFocus={() => setIsExpanded(true)} // Expand on focus
                  className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Add a pickup Location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  onFocus={() => setIsExpanded(true)} // Expand on focus
                  className="w-full px-4 py-2 border bg-slate-50 text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Enter your Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </form>

          </div>


          {/* Additional Details */}
          <div
            className={`transition-all duration-300 ${isExpanded ? "h-[75%]" : "hidden"
              }`}
          >
            <LocationSearchPanel VehiclePanel={VehiclePanel} SetVehicalPanel={SetVehicalPanel} />
          </div>
        </div>
        <div
          className={`fixed w-[400px] z-10 bottom-0 bg-white p-5 ${vehicalPanel ? "" : "translate-y-full"
            }`}
        >
          <VehiclePanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
