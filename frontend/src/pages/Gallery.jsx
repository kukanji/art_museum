import { useParams, useSearchParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemButton, Divider, Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SquareIcon from '@mui/icons-material/Square';


export const Gallery = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const galleryId = params.gallery_id;
    const artistId = searchParams.get("artist_id");
    const [signleGallery, setSignleGallery] = useState([]);
    const [multipleGalleries, setMultipleGalleries] = useState([]);
    const [allArts, setAllArts] = useState([]);

    useEffect(() => {
    const fetchElements = async () => {
        try {
        const singleGalleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/${galleryId}/`);
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
        setSignleGallery(singleGalleryResponse.data);
        setMultipleGalleries(multipleGalleriesResponse.data);
        setAllArts(allArtsOfSingleGalleryResponse.data);
        } catch (error) {
        console.error(error);
        }
    };
    fetchElements();
    }, [location]);
    return (
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2} rowSpacing={10}>
          <Grid size={12}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon sx={{ mr: 0.5  }}></SquareIcon>
              {signleGallery.title}
            </Typography>
            <Divider sx={{ borderColor: "black", borderWidth: 1, mb: 2 }} />
            <Typography variant="body1">{signleGallery.description}</Typography>
          </Grid>
          <Grid size={3.6}>
            <Box sx={{ backgroundColor: 'white', p: 2, boxShadow: 1, borderRadius: 4 }}>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <SquareIcon sx={{ mr: 0.4, fontSize: '1.2rem' }}></SquareIcon>GALLERIES
              </Typography>
              <Divider sx={{ borderColor: "black", borderWidth: 1 }} />
              <List>
                {multipleGalleries.map((galleryitem) => (
                  <ListItem key={galleryitem.id} disablePadding>
                    <ListItemButton 
                      component={Link} 
                      to={{ pathname: `/gallery/${galleryitem.id}`, search: `?artist_id=${artistId}`}}
                      sx={{
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      <ListItemText primary={galleryitem.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid size={8.4}>
            <Grid container spacing={2}>
              {allArts.map((artItem) => (
                <Grid size={6} key={artItem.id}>
                  <Card sx={{boxShadow: 1, borderRadius: 4}}>
                    <CardHeader
                      title={artItem.title}
                    />
                    <CardMedia
                      component="img"
                      // height="140"
                      image={artItem.thumbnail}
                      alt={artItem.title}
                    />
                    <CardContent>
                      <Typography variant="body2" sx={{
                          color: 'text.secondary',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                        }}>
                        {artItem.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      // <>
      //   <div className="container">
      //     <div className="header-area">
      //         <h2>{signleGallery.title}</h2>
      //         <p>{signleGallery.description}</p>
      //     </div>
      //     <div className="gallery-art-container">
      //         {allArts.map((artItem) => (
      //             <div className="art-container" key={artItem.id}>
      //               <div className="art-header">
      //                 <p>{artItem.title}</p>
      //               </div>
      //               <div className="art-body">
      //                   <a href={artItem.art}>
      //                     <img src={artItem.thumbnail} alt={artItem.title}/>
      //                   </a>
      //                   {/* <img src={artItem.art} alt="artist_image"/> */}
      //               </div>
      //               <div className="art-footer">
      //                 <p>{artItem.description}</p>
      //                 {/* <p>{artItem.like_sum}</p> */}
      //               </div>
      //             </div>
      //         ))}
      //     </div>
      //     <div className="sidebar-area">
      //         <nav>
      //             <ul>
      //                 {multipleGalleries.map((galleryitem) => (
      //                     <li className="list-row" key={galleryitem.id}>
      //                         <Link to={{ pathname: `/gallery/${galleryitem.id}`, search: `?artist_id=${artistId}`}}>{galleryitem.title}</Link>
      //                     </li>
      //                 ))}
      //             </ul>
      //         </nav>
      //     </div>
      //     <div className="footer-area">
      //       <p>© 2024 ArtMuseum</p>                      
      //     </div>
      //   </div>
      // </>
    );
};