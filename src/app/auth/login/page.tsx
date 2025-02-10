"use client"

import React, { useEffect } from "react";
import { TextField, Container, Box, Button } from "@mui/material";

export default function Login() {

  const [counter, setCounter] = React.useState(0);

  // component didMount
  useEffect(() => {
    console.log("Component mounted", { counter });
  },[])

  // component update
  useEffect(() => {
    console.log(`Component updated`, { counter });
  }, [counter]);


  const handleLoginSubmit = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Container maxWidth="sm" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center'
    }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField id="outlined-basic" label="Email" variant="outlined" margin="normal" />
        <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal" />
        <h2>{counter}</h2>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" onClick={handleLoginSubmit}>Login</Button>
      </Box>
    </Container>
  );
}
