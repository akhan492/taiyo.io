import React from "react";
import MarkerIcon from "../icons/marker-icon.png";
import { useQuery } from "react-query";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// API endpoint for country-specific data
const countryDataURL = "https://disease.sh/v3/covid-19/countries";
const MapPage: React.FC = () => {
  const { data: countriesData } = useQuery("countriesData", async () => {
    const response = await fetch(countryDataURL);
    return response.json();
  });
  const customMarker = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });
  const position = [20, 77];
  // console.log(countriesData[0].countryInfo.lat, "countries data");

  return (
    <div className="w-full pt-20 px-4 pb-8">
      <h2 className="text-xl text-white font-bold mb-4">
        <button
          className="rounded-full shadow shadow-slate-700 bg-blue-600 p-3 text-xl"
          style={{ marginTop: `${14}px` }}
        >
          Corona Cases World Map
        </button>
      </h2>
      <div className=" border-2 border-blue-500 w-11/12  m-auto 5 auto 5">
        {countriesData && (
          <MapContainer
            center={[0, 0]}
            zoom={4}
            style={{ height: "500px" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countriesData?.map((country: any) => (
              <Marker
                icon={customMarker}
                key={country?.country}
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                <Popup>
                  <div>
                    <h3>{country?.country}</h3>
                    <p>Active: {country?.active}</p>
                    <p>Recovered: {country?.recovered}</p>
                    <p>Deaths: {country?.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapPage;
