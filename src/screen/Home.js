import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Maps from '../components/Maps'
import './Home.css'
import { Link } from 'react-router-dom'
// import { usePosts } from '../custom-hooks'


const Home = () => {

    const [datawisata, setWisata] = useState([]);

    useEffect(() => {
        getWisata();
    }, []);

    const getWisata = async () => {
        const response = await axios.get('http://localhost:5000/Wisata');
        console.log(response);
        setWisata(response.data);
    };

    // const [posts, isLoading] = usePosts()
    // const top = posts.filter((val) => {
    //     if (val.fields.id < 4){
    //         return val
    //     }
    // } )

    // console.log(top)

    // if(isLoading)return (
    //     <p></p>
    // )

    return (
        <div>
            <div className="home">      
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path fill="#fff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="home__banner">
                   <div className="banner__left">
                       <h1 >Wisata Malang</h1>
                       <p>Jelajahi Keindahan di Kabupaten Malang yang berada di Jawa Timur</p>
                   </div>
                   <div className="banner__right">
                       <img src="img/banner.png" alt="baner" />
                   </div>
                </div>
            </div>
            {/* <div className="map">
                <div className="map__title font_t"><h1 className="font_t">Lokasi Wisata Tolitoli</h1></div>
                <Maps />
            </div> */}
            <div className="favorite">
                <h1 className="favorite__title font_t">Wisata Favorit</h1>
                <p className="favorite__subtitle">3 Wisata terfavorit di Kabupaten Malang 2023</p>
                <div className="favorite__wisata">
                <div className="posts__container">
                    {/* <div className="posts">
                        {top.map((val) => {
                            return (
                                <Link
                                    className="posts__post"
                                    key={val.fields.slug}
                                    to={val.fields.slug}
                                >
                                    <div className="posts__card">
                                        <img src={val.fields.image.fields.file.url} alt={val.fields.name} />
                                        <h3 className="card__name">{val.fields.name}</h3>
                                    </div>

                                </Link>
                            )
                        })}
                    </div> */}
                        <div className="posts">
                            {datawisata
                                .sort((a, b) => b.rating - a.rating) // Mengurutkan array berdasarkan rating secara menurun
                                .slice(0, 3) // Mengambil 3 item pertama setelah diurutkan
                                .map((Wisata) => {
                                    return (
                                        <div className="posts__post" key={Wisata.id}>
                                            <div className="posts__card">
                                                <img src={Wisata.url} alt="Gambar Wisata" />
                                                <h3 className="card__name">{Wisata.nama}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>

                </div>

                </div>
            </div>



        </div>
    )
}

export default Home
