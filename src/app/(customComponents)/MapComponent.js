import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <MapContainer
        center={[41.2995, 69.2401]} // Tashkent koordinatalari
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.2995, 69.2401]}>
          <Popup>Bu Toshkent shahridir!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
