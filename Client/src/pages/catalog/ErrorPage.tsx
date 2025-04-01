import { Alert, AlertTitle, Button, Container, List, ListItem, ListItemText } from "@mui/material";
import requests from "../../api/request";
import { useState } from "react";

const ErrorPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  
  const getValidationErrors= ()=>{
requests.Errors.getValidationError().then(()=>{console.log("no validation")}).catch(errors=>setValidationErrors(errors))

  }
  return (
   <Container>
    {
      validationErrors.length >0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {
              validationErrors.map((error, index)=>(
                <ListItem key= {index}>
                  <ListItemText>
                    {error}
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </Alert>

      )
    }
    <Button sx={{mr:2}} variant="contained" onClick={()=>requests.Errors.get400error().catch(error=>console.log(error))}>400 error</Button>
    <Button sx={{mr:2}} variant="contained" onClick={()=>requests.Errors.get401error().catch(error=>console.log(error))}>401 error</Button>
    <Button sx={{mr:2}} variant="contained" onClick={()=>requests.Errors.get404error().catch(error=>console.log(error))}>404 error</Button>
    <Button sx={{mr:2}} variant="contained" onClick={()=>requests.Errors.get500error().catch(error=>console.log(error))}>500 error</Button>
    <Button sx={{mr:2}} variant="contained" onClick={getValidationErrors}>VALIDATION ERROR</Button>
   </Container>
  );
};

export default ErrorPage;
