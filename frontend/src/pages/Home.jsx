import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Home = () => {
    const params = useParams();
    const artistId = params.artist_id;
    const [home, setHome] = useState([]);
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
    const fetchElements = async () => {
      try {
        const singleArtistHomeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/home/${artistId}/`);
        const allGalleriesOfOneArtistResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        setHome(singleArtistHomeResponse.data);
        setGalleries(allGalleriesOfOneArtistResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchElements();
    }, []);

    return (
      <>
        <div className="container">
          <div className="header-area">
              <h2>HOME PAGE</h2>
              <p>{home.description}</p>
          </div>
          <div className="home-art-area">
              <img src={home.art} alt="artist_image"/>
          </div>
          <div className="sidebar-area">
              <nav>
                  <ul>
                      {galleries.map((item) => (
                          <div key={item.id}>
                              <li className="list-row">
                                  <Link to={{ pathname: `/gallery/${item.id}`, search: `?artist_id=${artistId}`}}>{item.title}</Link>
                              </li>
                          </div>
                      ))}
                  </ul>
              </nav>
          </div>
          <div className="footer-area"> 
            <a href={home.url} target="_blank" rel="noreferrer">instagramを見る</a>
            <a href={home.twitter} target="_blank" rel="noreferrer">twitterを見る</a>
            <p>© 2024 ArtMuseum</p>                      
          </div>
        </div>
      </>
    );
};