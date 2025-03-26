
import Header from "../components/Header";
import { CssBaseline, Container } from "@mui/material";
import { Outlet } from "react-router";

function App() {
  

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />  
      </Container>
    </>
  );
}

export default App;
