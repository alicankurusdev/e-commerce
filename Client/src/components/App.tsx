
import Header from "../components/Header";
import { CssBaseline, Container } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import   "react-toastify/ReactToastify.css";

function App() {
  

  return (
    <>
    <ToastContainer  position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />  
      </Container>
    </>
  );
}

export default App;
