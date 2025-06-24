import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';

// import characters from './protagonists.json'

function App() {
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          LA Surf Shops to Visit
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Los Angeles
        </Typography>
        <Box textAlign='center'>
        <Button 
        //class works
        //className="characterButton"
        variant="contained"
        
        sx={{ bgcolor: red[500]
        }}
        //style={{backgroundColor: red}}
        //
        >
          Red Button?
        </Button>
        </Box>
      </Container>

      <Container maxWidth="lg">
        
        <Grid container spacing={4}>
          <Grid >

              <Card
                sx={{ maxWidth: 345 }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://media.timeout.com/images/102831020/750/562/image.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mollusk Surf Shop
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Surf aficionados and pros alike can drool over the custom boards, 
                    artist-designed tees, hard-to-find wet suits and other beach gear like handmade backpacks and sandals. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>

              </Card>

          </Grid>



          <Grid>


            <Card
              sx={{ maxWidth: 345 }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://media.timeout.com/images/103276135/1920/1080/image.webp"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rider Shack
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Opened in 2006, Rider Shack is a neighborhood surf shop at its core. Located in 
                  in Marina Del Rey and Culver City area. A 
                  favored spot and a local hangout for Venice and Santa Monica surfers.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>

            </Card>
          </Grid>

          <Grid>


            <Card
              sx={{ maxWidth: 345 }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://media.timeout.com/images/103276130/1920/1080/image.webp"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dive and Surf
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Their selection of surfboards is smaller compared to nearby 
                  competitors, but Dive N Surf makes up for it in the amount 
                  of dive gear they carry.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>

            </Card>
          </Grid>
        </Grid>



      </Container>
    </>


  )
}

export default App