import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export default function Header(props: any) {
  const{title}=props
  const{description}=props;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "pink",
        justifyContent: "space-between",
        px: 2,
        py: 2
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap:1
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            backgroundColor:"white",
            borderRadius:1
        
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
        variant="contained"
        >
          Go
        </Button>
      </Box>
    </Box>
  );
}
