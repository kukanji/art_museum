import { useParams } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom"; //書き換え
import { useState, useEffect } from 'react'

export const Gallery = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams(); //書き換え

    return (
        <div>
        Gallery.jsxのページを表示しています。
        <p>artist_id:{params.artist_id}</p>
        <p>title:{searchParams.get("title")}</p>
        </div>
    );
};