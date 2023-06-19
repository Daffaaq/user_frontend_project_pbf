import React from 'react'
import { useSinglePost } from '../custom-hooks'
import { Link, useParams } from 'react-router-dom'
import Map from '../components/Map'
import './DetailWisata.css'

const DetailWisata = () => {

    const { slug } = useParams()
    const [post, isLoading] = useSinglePost(slug)

    console.log(post)

    if (isLoading) return (
        <p></p>
    )
    return (
        <><div className="detail">
            <h1>{post.name}</h1>
            <div className="detailwisata">                
                <div className="detailwisata__left">
                    <div className="left__image">
                        <img src={post.image.fields.file.url} alt={post.name} />
                    </div>
                </div>
                <div className="detailwisata__right">
                    <h2 className="font_t">Deskripsi</h2>
                    <p>{post.desc}</p>
                    <h2 className="font_t">Rekomendasi Kendaraan</h2>
                    <p>{post.vehicle}</p>
                </div>
            </div>
            {/* <div className="detail__map">
                <h1>Lokasi Wisata</h1>
            <Map name={post.name} link={post.link} lat={post.location.lat} lon={post.location.lon}/>
            </div> */}
        </div>
        </>
    )
}

export default DetailWisata
