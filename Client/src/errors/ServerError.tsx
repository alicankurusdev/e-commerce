import { Card, Container, Divider, Typography } from '@mui/material'
import { useLocation } from 'react-router'

const ServerError = () => {

    const {state} = useLocation()

  return (
<Container component={Card} sx={{p:3}}>
{
    state?.error ?(
        <>
        <Typography variant="h1" color="initial">
            {state.error.title}- { state.status}
            </Typography>
            <Divider></Divider>
            <Typography>{state.error.detail||"Unknown Error"} ||    </Typography>
            </>
    ):(
<Typography> Server Error </Typography>  
  )
}

</Container>)
}

export default ServerError