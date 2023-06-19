import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logos from '../images/mark.png'
import { usePosts } from '../custom-hooks/'


const markerIcon = new L.Icon({
    iconUrl: logos,
    iconSize: [20, 30]
})



const Maps = () => {

    const [posts, isLoading] = usePosts()
    console.log(posts)

    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <MapContainer classname='map'
                center={[1.120796, 120.784706]}
                zoom={9}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {posts.map((post) => {
                    let lat = post.fields.location.lat
                    let lon = post.fields.location.lon
                    return(
                        <div>
                    <Marker position={[lat, lon]} icon={markerIcon}>
                        <Popup>
                            <p>{post.fields.name}</p>
                           <a href={post.fields.link}>Buka Map</a>
                        </Popup>
                    </Marker>
                    </div>
                    )
                })}




            </MapContainer>
        </div>
    )
}

export default Maps
