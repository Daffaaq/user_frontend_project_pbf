import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Link, useHistory } from 'react-router-dom';
import './ListPenginapan.css';

const ListPenginapan = () => {
  const [datapenginapan, setWisata] = useState([]);
  const [input, setInput] = useState("");

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
    const response = await axios.get('http://localhost:5000/Penginapan');
    setWisata(response.data);
  };
  const handleSearchChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInput('');
  };

  const history = useHistory();

  const handleReadMore = (id) => {
    history.push(`/description/${id}`);
  };

  return (
    <div className="listpenginapan">
      <img className="banner__img" src="/img/penginapan.jpg" alt="tes" />
      <div className="listpenginapan__search">
        <input type="text" placeholder="Search..." value={input} onChange={handleSearchChange} />
        <button type="submit" onClick={handleClick}><i className="fa fa-search"></i></button>
      </div>

      <div className="listpenginapan__item">
        <div className="posts__container">
          <div className="posts">
            {datapenginapan.filter((penginapan) => {
              if (input === "") {
                return penginapan;
              } else if (penginapan.nama.toLowerCase().includes(input.toLowerCase())) {
                return penginapan;
              }
              return null;
            }).map((penginapan) => (
              <Card key={penginapan.id} className="custom-card">
                <Card.Img
                  variant="top"
                  src={penginapan.url}
                  alt="Gambar penginapan"
                  style={{ objectFit: "cover", height: "250px", width: "100%" }}
                />
                <Card.Body className="text-left">
                  <Card.Title className="text-left">{penginapan.nama}</Card.Title>
                  <Card.Text className="text-left">
                    Rating: {penginapan.rating} {renderRatingStars(penginapan.rating)}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link
                    href={penginapan.url_gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-divider"
                  >
                    Open in Google Maps
                  </Card.Link>
                  <Card.Link
                    onClick={() => handleReadMore(penginapan.id)}
                    className="card-link-read-more"
                  >
                    Read More
                  </Card.Link>
                </Card.Body>
              </Card>
              // <div
              //   className="posts__post"
              //   key={penginapan.id}
              // >
              //   <div className="posts__card">
              //     <img src={penginapan.url} alt={penginapan.name} />
              //     <h3 className="card__name">{penginapan.nama}</h3>
              //     <div className="card__description">
              //       <span>
              //         {penginapan.deskripsi}
              //         <button
              //           onClick={() => handleReadMore(penginapan.id)}
              //         >
              //           Read More
              //         </button>
              //       </span>
              //     </div>
              //     <div className="card__rating">
              //       Rating: {penginapan.rating} <i className="fa fa-star"></i>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPenginapan;
