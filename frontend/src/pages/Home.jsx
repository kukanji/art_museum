import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SquareIcon from '@mui/icons-material/Square';


export const Home = () => {
    const params = useParams();
    const artistId = params.artist_id;
    const [home, setHome] = useState([]);
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
    const fetchElements = async () => {
      try {
        const singleArtistHomeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/home/`, {
          params: {
            artist_id : artistId
          }
        });
        const allGalleriesOfOneArtistResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/`, {
            params: {
              artist_id : artistId
            }
          });
        setHome(singleArtistHomeResponse.data[0]);
        setGalleries(allGalleriesOfOneArtistResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchElements();
    }, []);

    return (
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon sx={{ mr: 0.5  }}></SquareIcon>ARTIST PAGE
            </Typography>
            <Typography variant="body1">{home.description}</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon sx={{ mr: 0.3, fontSize: '1rem' }}></SquareIcon>GALLERIES
            </Typography>
            <List>
              {galleries.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton 
                    component={Link} 
                    to={{ pathname: `/gallery/${item.id}`, search: `?artist_id=${artistId}`}}
                    sx={{
                      '&:hover': {
                        color: 'primary.dark',
                      }
                    }}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={8}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
              }}
              src={home.art}
              alt="artist_image"
            />
          </Grid>
        </Grid>
      </Container>
    );
};