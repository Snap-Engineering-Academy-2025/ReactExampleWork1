import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'
import { red } from "@mui/material/colors";

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
          CSS Mystery
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Why isn't the CSS working?
        </Typography>
      </Container>
 
          
      <Container maxWidth="lg">
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
      </Container>
    </>
  )
}

export default App