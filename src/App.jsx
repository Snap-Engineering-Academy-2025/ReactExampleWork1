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
//import * as React from 'react';
import React,{useState} from "react"

import Box from '@mui/material/Box';
import DataCard from './DataCard';
import characters from './protagonists.json';

function App() {
const[count, setCount]= useState(0)
  function add() {
    setCount(count+1)
  }

  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Surf Shops to Visit
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Check out these stores for your surfing needs. Wetsuits, longboards, shortboards, wax, sunscreen, etc. 
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
          Testing Red 
        </Button>
        
        <Button size="small"
                variant="contained"
                sx={{ px: 4, mx: "auto" }}
                onClick={add}


                // onClick={() => {
                //     setCount("You clicked me!");
                // }}
                >Click Me</Button>
        </Box>
      </Container>

      <Container maxWidth="lg">
      
        {/* {<Grid container spacing={4} sx= {{paddingBottom: 4}}>
          <Grid > */}

              {/* {<Card
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

              </Card> } */}
              {/* <DataCard
              text = "Mollusk Surf Shop "
              imageURL={"https://media.timeout.com/images/102831020/750/562/image.jpg"}
              description = {`Surf aficionados and pros alike can drool over the custom boards, 
                    artist-designed tees, hard-to-find wet suits and other beach gear like handmade backpacks and sandals. `}
              //[{ " "}]
              />

          </Grid>



          <Grid> */}


            {/* { <Card
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
                  Welcome to Rider Shack Surf Shop, a small, family-owned surf shop in 
                  LA dedicated to serving the local surf community since 2006.  
                  Whether you’re a beginner or a seasoned pro 
                  chasing the next swell, we go above and beyond to provide  
                  customer service and  advice.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>

            </Card> } */}
            {/* <DataCard
              text = "Rider Shack"
              imageURL={"https://media.timeout.com/images/103276135/1920/1080/image.webp"}
              description = {`Welcome to Rider Shack Surf Shop, a family-owned surf shop in 
                  LA dedicated to serving the local surf community since 2006.  
                  Whether you’re a beginner or a seasoned pro, we go above and beyond to provide  
                  customer service and  advice. `}
              //[{ " "}]
              />








          </Grid>

          <Grid> */}


            {/* { <Card
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

            </Card> } */}
              {/* <DataCard
              text = "Dive and Surf"
              imageURL={"https://media.timeout.com/images/103276130/1920/1080/image.webp"}
              description = {`Their selection of surfboards is smaller compared to nearby 
                  competitors, but Dive N Surf makes up for it in the amount 
                  of dive gear they carry. `}
              //[{ " "}]
              />


          </Grid>




          <Grid //item xs={12} md = {4}
          >
             <DataCard
              text = "Surf Wakiki"
              imageURL={"https://marvel-b1-cdn.bc0a.com/f00000000296017/mallmaverick.imgix.net/web/property_managers/1/properties/711/all/20231229032934/IMG_6087.jpg?auto=format,compress"}
              description = {`Looking for the ultimate beach paradise
             Look no further than Surf Waikiki—your one-stop destination
              for all your beach rental needs! 
              We've got you covered for an epic beach day!  `}
              //[{ " "}] 
              />
          </Grid>
          <Grid>
            <DataCard
              text={characters[0].text}
              imageURL={characters[0].imageURL}
              description={characters[0].description}
            />
          </Grid>

        </Grid> } */}
{/* this below already generates cards too. with JSON file*/}
        <Grid spacing={4} sx= {{paddingBottom: 4}} container>
          {characters.map((character) => (
            <Grid>
              <DataCard
                text={character.text}
                imageURL={character.imageURL}
                description={[character.description
                ]}
              />
            </Grid>
          ))}
        </Grid>

 

      </Container>
    </>


  )
}

console.log("My data:", characters);
export default App