import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Home = () => {
    const params = useParams();
    const artistId = params.artist_id;
    // console.log(`params_id:${params.artist_id}`);
    const [home, setHome] = useState([]);
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
    const fetchElements = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/`);
        // console.log(`artist_id:${params.artist_id}`);
        const singleArtistHomeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/home/${artistId}/`);
        const allGalleriesOfOneArtistResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        // console.log(`homeResponse:${homeResponse.data}`);
        console.log(singleArtistHomeResponse.data);
        console.log(allGalleriesOfOneArtistResponse.data);
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
          <div className="art-area">
              <img src={home.art} alt="artist_image"/>
          </div>
          <div className="sidebar-area">
              <nav>
                  <ul>
                      {galleries.map((item) => (
                          <div key={item.id}>
                              <li className="list-row">
                                  {/* <Link to={`/gallery/${params.artist_id}`}>{item.title}</Link> */}
                                  <Link to={{ pathname: `/gallery/${item.id}`, search: `?artist_id=${artistId}`}}>{item.title}</Link>
                                  {/* <Link to={{ pathname: `/gallery/${artist_id}`, search: ?title=title}}>{item.title}</Link> */}
                              </li>
                          </div>
                      ))}
                  </ul>
              </nav>
          </div>
          <div className="footer-area">
            <a href={home.url} target="_blank" rel="noreferrer">instagramのURL</a>
            <a href={home.twitter} target="_blank" rel="noreferrer">twitterのURL</a>
            <p>© 2021 ArtMuseum</p>                      
          </div>
        </div>
      </>
    );
};