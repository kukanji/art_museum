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
    const [signleGallery, setSignleGallery] = useState([]);
    const [multipleGalleries, setMultipleGalleries] = useState([]);
    const [allArts, setAllArts] = useState([]);

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
              <h2>{signleGallery.title}</h2>
              <p>{signleGallery.description}</p>
          </div>
          <div className="gallery-art-container">
              {allArts.map((artItem) => (
                  <div className="art-container" key={artItem.id}>
                    <div className="art-header">
                      <p>{artItem.title}</p>
                    </div>
                    <div className="art-body">
                        <img src={artItem.art} alt="artist_image"/>
                    </div>
                    <div className="art-footer">
                      <p>{artItem.description}</p>
                      {/* <p>{artItem.like_sum}</p> */}
                    </div>
                  </div>
              ))}
          </div>
          <div className="sidebar-area">
              <nav>
                  <ul>
                      {multipleGalleries.map((galleryitem) => (
                          <li className="list-row" key={galleryitem.id}>
                              {/* <Link to={`/gallery/${params.artist_id}`}>{item.title}</Link> */}
                              <Link to={{ pathname: `/gallery/${galleryitem.id}`, search: `?artist_id=${artistId}`}}>{galleryitem.title}</Link>
                              {/* <Link to={{ pathname: `/gallery/${artist_id}`, search: ?title=title}}>{item.title}</Link> */}
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>
          <div className="footer-area">
            {/* <a href={home.url} target="_blank" rel="noreferrer">instagramを見る</a>
            <a href={home.twitter} target="_blank" rel="noreferrer">twitterを見る</a> */}
            <p>© 2024 ArtMuseum</p>                      
          </div>
        </div>
      </>
    );
};