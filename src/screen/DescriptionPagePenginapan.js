import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DescriptionPagePenginapan.css'

const DescriptionPage = () => {
  const [datapenginapan, setDatapenginapan] = useState({});
  const { id } = useParams();

  const getPenginapanById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Penginapan/${id}`);
      setDatapenginapan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPenginapanById();
  }, []);

  if (!datapenginapan) {
    return <div>Penginapan not found</div>;
  }
  // const getPenginapanbyId = async () => {
  //   const response = await axios.get(`http://localhost:5000/Penginapan/${id}`);
  //   SetNama(response.data.nama);
  //   SetDeskripsi(response.data.deskripsi);
  //   SetFile(response.data.gambar);
  //   setPreview(response.data.url);
  // }
  // const [nama, SetNama] = useState("");
  // const [deskripsi, SetDeskripsi] = useState("");
  // const [file, SetFile] = useState("");
  // const [preview, setPreview] = useState("");
  // const navigate = useNavigate();
  // const { id } = useParams();

  // useEffect(() => {
  //   getPenginapanbyId();
  // }, [])
  // const { id } = useParams();

  // Assuming you have the full list of accommodations
  // const attractions = [
  //   { id: 1, name: "Hotel Golden Tulip Batu", image: "/img/penginapan.jpg", description: "Golden Tulip Holland Resort Batu memiliki fasilitas terbaik seperti: AC, Restoran, Kolam Renang, Resepsionis 24 Jam, Parkir, Lift, WiFi. (Beberapa fasilitas lain mungkin memerlukan biaya tambahan)", rating: 4.5 },
  //   { id: 2, name: "Ubud Hotel & Cottages", image: "/img/ubud.jpg", description: "Hotel sederhana yang berada di bangunan teduh ini terletak di pinggiran kota Malang dan menghadap ke sungai. Hotel ini berjarak 5 km dari Museum Malang Tempo Doeloe dan 15 km dari Eco Green Park yang menampilkan atraksi dari berbagai binatang Kamar nyaman dengan suasana tropis dilengkapi TV layar datar, meja, dan kamar mandi dalam dengan pancuran bergaya siraman hujan. Kamar di kelas yang lebih tinggi dan kamar suite memiliki area tempat duduk serta balkon pribadi dengan pemandangan taman.", rating: 3.8 },
  //   { id: 3, name: "The Singhasari Hotel Malang", image: "/img/singa.png", description: "Terletak 3,4 km dari Batu Secret Zoo, resor kelas atas berpemandangan gunung ini berjarak 4,2 km dari Museum Angkut, dan 15 km dari kota Malang. Kamar-kamar kontemporer dengan balkon dan pemandangan gunung ini memiliki Wi-Fi gratis, TV layar datar, serta pembuat teh dan kopi. Kamar di kelas yang lebih tinggi memiliki kamar mandi marmer; beberapa di antaranya memiliki tambahan ruang keluarga atau teras dengan akses langsung ke kolam renang. Room service tersedia. Hotel ini memiliki restoran keren, lounge, dan bar di atap. Terdapat kolam renang outdoor, spa, ruang kebugaran, dan sauna. Fasilitas lainnya termasuk taman bermain, zipline, golf mini, serta lapangan basket dan tenis. Ada juga ruang konvensi dan aula.",  rating: 4.2 },
  // ];

  // Find the accommodation with the matching id
  // const accommodation = attractions.find(attraction => attraction.id === parseInt(id));

  // if (!accommodation) {
  //   return <div>Accommodation not found</div>;
  // }

  return (
    // <div className="description-page">
    //   <h2>{datapenginapan.nama}</h2>
    //   <img src={datapenginapan.url} alt={datapenginapan.nama} />
    //   <p>{datapenginapan.deskripsi}</p>
    //   {/* <p>Rating: {accommodation.rating}</p> */}
    //   {/* Add any additional information or components here */}
    // </div>
    <div className="card">
      <div className="card-image">
        <img src={datapenginapan.url} alt={datapenginapan.nama} />
      </div>
      <div className="card-content">
        <h2>{datapenginapan.nama}</h2>
        <p>{datapenginapan.deskripsi}</p>
        {/* <p>Rating: {datapenginapan.rating}</p> */}
        {/* Add any additional information or components here */}
        <Link to="/penginapans">Back to Penginapan</Link>
      </div>
    </div>

  );
};

export default DescriptionPage;
