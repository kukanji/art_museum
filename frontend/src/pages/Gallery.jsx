import { useParams, useSearchParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Gallery = () => {
    const params = useParams();
    const [searchParams] = useSearchParams(); //書き換え
    const location = useLocation();
    const galleryId = params.gallery_id;
    const artistId = searchParams.get("artist_id"); //書き換え
    // console.log(`artistId:${artistId}`);
    // console.log(`galleryId:${galleryId}`);
    const [SignleGallery, setSignleGallery] = useState([]);
    const [MultipleGalleries, setMultipleGalleries] = useState([]);
    const [AllArts, setAllArts] = useState([]);

    useEffect(() => {
    const fetchElements = async () => {
        try {
        const singleGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/${galleryId}/`);
        // const allGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery?artist_id=${artistId}/`);
        const multipleGalleriesResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        const allArtsOfSingleGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/art/`, {
            params: {
              gallery_id : galleryId
            }
          });
        console.log(singleGalleryResponse.data);
        console.log(multipleGalleriesResponse.data);
        console.log(allArtsOfSingleGalleryResponse.data);
        setSignleGallery(singleGalleryResponse.data);
        setMultipleGalleries(multipleGalleriesResponse.data);
        setAllArts(allArtsOfSingleGalleryResponse.data);
        } catch (error) {
        console.error(error);
        }
    };
    fetchElements();
    // }, [galleryId]);
    }, [location]);
    return (
      <>
        <div className="container">
          <div className="header-area">
              <h2>HOME PAGE</h2>
              <p>{SignleGallery.description}</p>
          </div>
          <div className="gallery-art-area">
              {/* <img src={AllArts.art} alt="artist_image"/> */}
              {AllArts.map((artItem) => (
                  <div key={artItem.id}>
                      <img src={artItem.art} alt="artist_image"/>
                  </div>
              ))}
          </div>
          <div className="sidebar-area">
              <nav>
                  <ul>
                      {MultipleGalleries.map((galleryitem) => (
                          <div key={galleryitem.id}>
                              <li className="list-row">
                                  {/* <Link to={`/gallery/${params.artist_id}`}>{item.title}</Link> */}
                                  <Link to={{ pathname: `/gallery/${galleryitem.id}`, search: `?artist_id=${artistId}`}}>{galleryitem.title}</Link>
                                  {/* <Link to={{ pathname: `/gallery/${artist_id}`, search: ?title=title}}>{item.title}</Link> */}
                              </li>
                          </div>
                      ))}
                  </ul>
              </nav>
          </div>
          <div className="footer-area">
            {/* <a href={home.url} target="_blank" rel="noreferrer">instagramを見る</a>
            <a href={home.twitter} target="_blank" rel="noreferrer">twitterを見る</a> */}
            <p>© 2021 ArtMuseum</p>                      
          </div>
        </div>
      </>
    );
};