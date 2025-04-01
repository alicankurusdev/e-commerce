import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Card, Divider } from "@mui/material";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <Container component={Card} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom color="initial">
        NotFound
      </Typography>
      <Divider></Divider>
      <Button variant="contained" component={NavLink} to="/catalog" sx={{mt:3}}> Continue Shopping</Button>
    </Container>
  );
};

export default NotFound;
