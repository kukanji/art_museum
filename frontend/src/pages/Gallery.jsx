import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; //書き換え
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Gallery = () => {
    const params = useParams();
    const [searchParams] = useSearchParams(); //書き換え
    const galleryId = params.gallery_id;
    const artistId = searchParams.get("artist_id"); //書き換え
    console.log(`artistId:${artistId}`);
    const [galleryData, setGalleryData] = useState([]);
    const [artData, setArtData] = useState([]);

    useEffect(() => {
    const getData = async () => {
        try {
        const oneGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/${galleryId}/`);
        // const allGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery?artist_id=${artistId}/`);
        const multipleGalleriesResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        console.log(oneGalleryResponse.data);
        console.log(multipleGalleriesResponse.data);
        setGalleryData(oneGalleryResponse.data);
        setArtData(multipleGalleriesResponse.data);
        } catch (error) {
        console.error(error);
        }
    };
    getData();
    }, []);
    return (
        <div>
        Gallery.jsxのページを表示しています。
        <p>galleryId:{galleryId}</p>
        <p>artistId:{artistId}</p>
        </div>
    );
};