import React from "react";
import "../ComponentStyle/Announcement.css";

const announcements = [
  "🚆 Attention Passengers: Train No. 12704 Falaknuma Express is running 20 minutes late due to operational reasons.",
  "🚉 Platform Update: Train No. 12723 Telangana Express will depart from Platform No. 5 instead of Platform No. 3.",
  "⚠️ Passengers are advised to arrive at the station at least 30 minutes before departure.",
  "🔔 Train No. 12603 Hyderabad Express has arrived at Platform No. 2.",
  "🔄 Schedule Change: Train No. 17057 Devagiri Express has been rescheduled by 45 minutes.",
  "🌧️ Due to heavy rainfall, some train services may experience delays. We regret the inconvenience.",
  "🚉 Boarding for Train No. 12760 Charminar Express has commenced from Platform No. 4.",
  "📢 Passengers traveling to Vijayawada are requested to check the latest platform information before departure.",
  "🚆 Train No. 12026 Shatabdi Express is expected to arrive on time.",
  "⚠️ Please do not leave your luggage unattended. Report suspicious items to railway authorities.",
  "🔔 Train No. 17626 Kacheguda Express is now ready for departure from Platform No. 1.",
  "🙏 Indian Railways wishes all passengers a safe and comfortable journey.",
];

const Announcement = () => {
  return (
    <div className="bg-white rounded-[20px] shadow-lg p-1 grow">
      <div className="px-4 flex flex-col m-4 h-[250px]">
        <h2 className="text-[1.5em] text-black font-bold">
          Announcements
        </h2>

        <div className="overflow-hidden mt-3 h-full">
          <div className="auto-scroll">
            {[...announcements, ...announcements].map((item, index) => (
              <div
                key={index}
                className="shadow rounded-lg p-3 my-2 bg-gray-50 hover:bg-blue-50 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;