import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; //書き換え
import { useState, useEffect } from 'react'

export const Gallery = () => {
    const params = useParams();
    const [searchParams] = useSearchParams(); //書き換え
    const [galleryData, setGalleryData] = useState([]);
    const [artData, setArtData] = useState([]);
    // useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const galleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/${params.artist_id}/`);
    //     const artResponse = await axios.get(`${import.meta.env.VITE_API_URL}/art/`);
    //     console.log(galleryResponse.data);
    //     console.log(artResponse.data);
    //     setGalleryData(galleryResponse.data);
    //     setArtData(artResponse.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    return (
        <div>
        Gallery.jsxのページを表示しています。
        <p>artist_id:{params.artist_id}</p>
        <p>gallery_id:{searchParams.get("gallery_id")}</p>
        </div>
    );
};