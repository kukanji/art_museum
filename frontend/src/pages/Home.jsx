import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Home = () => {
    const params = useParams();
    const artistId = params.artist_id;
    // console.log(`params_id:${params.artist_id}`);
    const [homeData, setHomeData] = useState([]);
    const [galleryData, setGalleryData] = useState([]);
    useEffect(() => {
    const getData = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/`);
        // console.log(`artist_id:${params.artist_id}`);
        const homeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/home/${artistId}/`);
        const galleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        // console.log(`homeResponse:${homeResponse.data}`);
        console.log(homeResponse.data);
        console.log(galleryResponse.data);
        setHomeData(homeResponse.data);
        setGalleryData(galleryResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    }, []);

    return (
        <div>
            Home.jsxのページを表示しています。
            <nav>
                <ul>
                    {galleryData.map((item) => (
                        <div key={item.id}>
                            <li>
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