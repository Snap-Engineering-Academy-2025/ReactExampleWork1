import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActions, Button } from '@mui/material';

//prop are similar to arguments 
//text is a prop here as a argument
//coming from parent componennt - appp.jsc
//giving it a valie "this is a prop
// how we are passing data to current
//passing text from app.jsx
//error is text is not defined. to pass text down put prop in ({text in the function statement func})
//add more
//datacard1 
//px was 0 before
export default function DataCard({imageURL, text, description}) {
  return (
   /* 
    <Card //this is not matching. before <Card>
       // sx={{ maxWidth: 350 }}
       >
      <CardMedia component="img" height="140" image={imageURL} />

      <CardContent sx={{ pt: 2 }}
      > 
        <Typography>Shop: {text} </Typography>
         <Typography>Description: {description}</Typography>
      </CardContent>
    </Card>
    */

      <Grid>


            <Card
              sx={{ maxWidth: 345  }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={imageURL}
                //title="green iguana"
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {text} 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                //variant="contained"
                //sx={{ px: 6, mx: "auto" }}
                onClick={() => {
                    alert("You clicked me!");
                }}
                >Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>

            </Card>
          </Grid>
  );
}
