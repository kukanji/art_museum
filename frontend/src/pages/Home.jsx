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
        <div className="whole-screen">
            Home.jsxのページを表示しています。
            <div className="art-frame">
              <img src={home.art} alt="artist_image" style={{ width:'50%' }}/>
            </div>
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
    );
};