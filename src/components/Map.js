import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logos from '../images/mark.png'


const markerIcon = new L.Icon({
    iconUrl: logos,
    iconSize: [20, 30]
})

const Map = ({lat, lon, name, link}) => { 

    const position = [lat, lon]
    return (
        <div>
            <MapContainer classname='map'
                center={position}
                zoom={18}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}>
                    <Popup>
                    <p>{name}</p>
                    <a href={link}>Buka Map</a>
                    </Popup>
                </Marker>
               
            </MapContainer>
        </div>
    )
}

export default Map
