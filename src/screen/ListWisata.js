import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Select, { components } from 'react-select';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link, useHistory } from 'react-router-dom';
import './ListWisata.css';

const ListWisata = () => {
    const [datawisata, setWisata] = useState([]);
    const [input, setInput] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const [selectedSort, setSelectedSort] = useState('desc');

    const renderRatingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className="star-icon gold" />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <FontAwesomeIcon
                    key={stars.length}
                    icon={faStarHalfAlt}
                    className="star-icon gold"
                />
            );
        }

        return stars;
    };

    useEffect(() => {
        getWisata();
    }, []);

    const getWisata = async () => {
        try {
            const response = await axios.get('http://localhost:5000/Wisata');
            setWisata(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = (event) => {
        setInput(event.target.value);
    };

    const history = useHistory();

    const handleReadMore = (id) => {
        history.push(`/wisata/${id}`);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setInput('');
    };

    const handleRatingFilter = (selectedOption) => {
        setSelectedRating(selectedOption.value);
    };

    const handleSortChange = (selectedOption) => {
        setSelectedSort(selectedOption.value);
    };

    const ratingOptions = [
        { value: 0, label: 'All' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
    ];

    const sortOptions = [
        { value: 'desc', label: '5 to 0' },
        { value: 'asc', label: '0 to 5' },
    ];

    return (
        <div className="listwisata">
            <img className="banner__img" src="/img/PantaiTaragusung.jpg" alt="tes" />
            <div className="listwisata__search">
                <input type="text" placeholder="Search..." value={input} onChange={handleSearchChange} />
                <button type="submit" onClick={handleClick}><i className="fa fa-search"></i></button>
                <div className="rating-filter">
                    <Select
                        options={ratingOptions}
                        value={selectedRating}
                        onChange={handleRatingFilter}
                        getOptionLabel={(option) => (
                            <span>
                                {option.label === 'All' ? option.label : renderRatingStars(option.value)}
                            </span>
                        )}
                        getOptionValue={(option) => option.value}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                borderColor: 'blue',
                                boxShadow: 'none',
                            }),
                            singleValue: (provided) => ({
                                ...provided,
                                color: 'gold',
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? 'gold' : 'transparent',
                                color: state.isSelected ? 'white' : 'black',
                            }),
                        }}
                        components={{
                            Option: ({ children, ...props }) => (
                                <components.Option {...props}>
                                    {children}
                                </components.Option>
                            ),
                        }}
                        placeholder="Select rating..."
                    />
                </div>
                <div className="sort-filter">
                    <Select
                        options={sortOptions}
                        value={selectedSort}
                        onChange={handleSortChange}
                    // Rest of your select component props
                    />
                </div>
            </div>
            <div className="listwisata__item">
                <div className="posts__container">
                    <div className="posts">
                        {datawisata
                            .filter((Wisata) => {
                                if (input === "") {
                                    return Wisata;
                                } else {
                                    const searchText = input.toLowerCase();
                                    if (
                                        Wisata.nama.toLowerCase().includes(searchText) ||
                                        Wisata.lokasi.toLowerCase().includes(searchText) ||
                                        Wisata.jam.toLowerCase().includes(searchText) ||
                                        String(Wisata.harga).includes(searchText)
                                    ) {
                                        return Wisata;
                                    }
                                }
                                return null;
                            })
                            .filter((Wisata) => {
                                if (selectedRating === 0) {
                                    return Wisata;
                                } else {
                                    return Wisata.rating >= selectedRating && Wisata.rating < selectedRating + 1;
                                }
                            })
                            .sort((a, b) => {
                                if (selectedSort === 'asc') {
                                    return a.rating - b.rating;
                                } else {
                                    return b.rating - a.rating;
                                }
                            })
                            .map((Wisata) => (
                                <Card key={Wisata.id} className="custom-card">
                                    <Card.Img
                                        variant="top"
                                        src={Wisata.url}
                                        alt="Gambar Wisata"
                                        style={{ objectFit: "cover", height: "250px", width: "100%" }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-left">{Wisata.nama}</Card.Title>
                                        <Card.Text className="text-left">
                                            Rating: {Wisata.rating} {renderRatingStars(Wisata.rating)}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="list-group-item-bordered">Jam: {Wisata.jam}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-bordered">Lokasi: {Wisata.lokasi}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-bordered">Harga: {Wisata.harga}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body className="card-link-container">
                                        <Card.Link
                                            href={Wisata.url_gmaps}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-link-divider"
                                        >
                                            Open in Google Maps
                                        </Card.Link>
                                        <Card.Link
                                            onClick={() => handleReadMore(Wisata.id)}
                                            className="card-link-read-more"
                                        >
                                            Read More
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListWisata;
