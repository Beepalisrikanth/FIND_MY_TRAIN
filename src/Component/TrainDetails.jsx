import React, { useContext } from "react";
import { TrainContext } from "../context/DataContext";

const TrainDetails = () => {
  const { ftData } = useContext(TrainContext);

  const trainData = ftData?.data;

  if (!trainData) {
    return (
      <div className="p-5 text-center">
        Loading train details...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* Header Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Trains Between Stations
        </h2>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="text-gray-500">From</p>
            <p className="text-xl font-semibold">
              {trainData?.fromStationCode}
            </p>
          </div>

          <div className="text-2xl">➡️</div>

          <div>
            <p className="text-gray-500">To</p>
            <p className="text-xl font-semibold">
              {trainData?.toStationCode}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Total Trains</p>
            <p className="text-2xl font-bold text-green-600">
              {trainData?.totalTrains}
            </p>
          </div>
        </div>
      </div>

      {/* Train List */}
      {trainData.totalTrains === 0 ? (
        <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-lg text-center">
          🚫 No trains available between{" "}
          <strong>{trainData.fromStationCode}</strong> and{" "}
          <strong>{trainData.toStationCode}</strong>
        </div>
      ) : (
        <div className="space-y-4">
          {trainData.trains.map((train, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-lg font-bold">
                    {train.trainName}
                  </h3>
                  <p className="text-gray-500">
                    Train No: {train.trainNumber}
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {train.trainType}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-500">Departure</p>
                  <p className="font-semibold">
                    {train.departureTime}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Arrival</p>
                  <p className="font-semibold">
                    {train.arrivalTime}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold">
                    {train.duration}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Runs On</p>
                  <p className="font-semibold">
                    {train.runningDays?.days  || "N/A"}  
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default TrainDetails;