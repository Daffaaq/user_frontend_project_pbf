import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import './ListKuliner.css'

const ListKuliner = () => {

    const [datakuliner, setKuliner] = useState([]);

    useEffect(() => {
        getKuliner();
    }, []);

    const getKuliner = async () => {
        const response = await axios.get('http://localhost:5000/Kuliner');
        setKuliner(response.data);
    };
    const [input, setInput] = useState("")

    const history = useHistory();

    const handleReadMore = (id) => {
        history.push(`/Kuliner/${id}`);
    };
    // const [data, setData] = useState([])
    // const [click, setClick] = useState("")

    // const client = require('contentful').createClient({
    //     space: 'h8p5u4i8urpb',
    //     accessToken: 'uv5OoGVAGhvdwJkSVDPHjUqJkNru_3yqL3vRurx06qI'
    // })

    // useEffect(() => {
    //     client.getEntries({
    //         content_type: 'kuliner'
    //     })
    //         .then((response) => {
    //             setData(response.items)
    //         })
    // }, [])

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setInput('');
    };

    // const attractions = [
    //     { id: 1, name: "Bakso Kota Cak Man Malang", image: "/img/bakso-kota-cak-man-malang.jpg",  description: "Mojolangu, Lowokwaru, Kota Malang, Jawa Timur 65141", location: "Mojolangu, Lowokwaru, Kota Malang, Jawa Timur 65141"  },
    //     { id: 2, name: "Pecel Kawi", image: "/img/Pecel-Kawi.jpg", description: "Jl. Kawi Kios No.43B, Bareng, Kec. Klojen, Kota Malang, Jawa Timur 65116"},
    //     { id: 3, name: "Soto Geprak Mbah Djo", image: "/img/Soto Geprak.jpg", description: "Jalan Letjen S. Parman, Malang, Jawa Timur 65116" },
    // ];

    return (
        <div className="listkuliner">
            <img className="banner__img" src="/img/ab.jpg" alt="tes" />
            <div className="listkuliner__search">
                <input type="text" placeholder="Search..." onChange={handleChange} />
                <button type="submit" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>
            
            <div className="listkuliner__item">
                <div className="posts__container">
                    <div className="posts">
                        {datakuliner.filter((kuliner) => {
                            if (input === "") {
                                return kuliner;
                            } else if (kuliner.nama.toLowerCase().includes(input.toLowerCase())) {
                                return kuliner;
                            }
                            return null;
                        }).map((kuliner) => (
                            <Card key={kuliner.id} className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src={kuliner.url}
                                    alt="Gambar kuliner"
                                    style={{ height: "250px", width: "340px" }}
                                />
                                <Card.Body>
                                    <Card.Title>{kuliner.nama}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Lokasi</ListGroup.Item>
                                </ListGroup>
                                <Card.Body className="card-link-container">
                                    <Card.Link
                                        href={kuliner.url_gmaps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-link-divider"
                                    >
                                        Open in Google Maps
                                    </Card.Link>
                                    <Card.Link
                                        onClick={() => handleReadMore(kuliner.id)}
                                        className="card-link-read-more"
                                    >
                                        Read More
                                    </Card.Link>
                                </Card.Body>



                            </Card>
                            // <Link
                            //     className="posts__post"
                            //     key={kuliner.id}
                            //     to={`/attractions/${kuliner.id}`}
                            // >
                            //     <div className="posts__card">
                            //         <img src={kuliner.url} alt={kuliner.name} />
                            //         <h3 className="card__name">{kuliner.nama}</h3>
                            //         <div className="card__description">
                            //             <i className="fa fa-map-marker"></i>
                            //             <span>
                            //                 {kuliner.description}
                            //                 <a
                            //                     href={kuliner.url_gmaps}
                            //                     target="_blank"
                            //                     rel="noopener noreferrer"
                            //                     >
                            //                      Open in Google Maps
                            //                 </a>
                            //             </span>
                            //         </div>
                            //     </div>
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListKuliner;
