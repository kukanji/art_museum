import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Home = () => {
    const params = useParams();
    console.log(params);
    const [homeData, setHomeData] = useState([]);
    const [galleryData, setGalleryData] = useState([]);
    useEffect(() => {
    const getData = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/`);
        // console.log(`artist_id:${params.artist_id}`);
        const homeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/home/${params.artist_id}/`);
        const galleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`);
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
                                <p>{item.title}</p>
                                {/* <Link to={`/gallery/${params.artist_id}`}>{item.title}</Link> */}
                                <Link to={{ pathname: `/gallery/${params.artist_id}`, search: `?title=${item.title}`}}>{item.title}</Link>
                                {/* <Link to={{ pathname: `/gallery/${artist_id}`, search: ?title=title}}>{item.title}</Link> */}
                            </li>
                            
                        </div>
                    ))}
                    
                </ul>
            </nav>
        </div>
    );
};