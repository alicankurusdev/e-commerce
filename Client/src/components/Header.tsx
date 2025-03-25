import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Header = () => {
  return (
    <div> 

<AppBar sx={{mb:4}} position="static" color="primary">
  <Toolbar>
    <Container maxWidth="xs">
    <Typography variant="h6">
      E-Commerce
    </Typography>
    </Container>
    
  </Toolbar>
</AppBar>
     </div>
  )
}

export default Header;