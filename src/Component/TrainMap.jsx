import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup
} from "react-leaflet";

const TrainMap = ({ ltData }) => {

  const route = ltData?.data?.route || [];

  // convert stations → lat,long array
  const positions = route.map(st => [
    st.latitude,
    st.longitude
  ]);

  if (!positions.length) return <p>No route available</p>;

  return (
    <MapContainer
      center={positions[0]}
      zoom={9}
      style={{ height: "400px", width: "100%" }}
    >
      {/* MAP STYLE */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Railway Line */}
      <Polyline positions={positions} />

      {/* Stations */}
      {route.map((station, i) => (
        <Marker
          key={i}
          position={[station.latitude, station.longitude]}
        >
          <Popup>
            🚉 {station.stationName}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TrainMap;