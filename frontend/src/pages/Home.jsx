import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
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
        <Grid container spacing={2} rowSpacing={10}>
          <Grid size={12}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon sx={{ mr: 0.5  }}></SquareIcon>ARTIST PAGE
            </Typography>
            <Divider sx={{ borderColor: "black", borderWidth: 1, mb: 2 }} />
            <Typography variant="body1">{home.description}</Typography>
          </Grid>
          <Grid size={4} sx={{ backgroundColor: 'white', p: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon sx={{ mr: 0.4, fontSize: '1.2rem' }}></SquareIcon>GALLERIES
            </Typography>
            <Divider sx={{ borderColor: "black", borderWidth: 1 }} />
            <List>
              {galleries.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton 
                    component={Link} 
                    to={{ pathname: `/gallery/${item.id}`, search: `?artist_id=${artistId}`}}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
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