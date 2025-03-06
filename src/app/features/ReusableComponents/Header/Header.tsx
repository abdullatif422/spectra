import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export default function Header(props: any) {
  const { title, description, actions } = props;

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
          gap: 1
        }}
      >
        {actions.map((action: any) => {
          if (action.type == "text") {
            return (
              <TextField
                key={action.id}
                variant="outlined"
                placeholder={action.placeholder}
                value={action.value}
                onChange={action.onChange}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            );
          }
          if (action.type == "Button") {
            return (
              <Button
                key={action.id}
                variant="contained"
                onClick={action.onClick}
              >
                {action.name}
              </Button>
            );
          }
        })}
      </Box>
    </Box>
  );
}

                {/* <Textfield
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
                  }}/>
                  <Button
                  variant="contained"
                  >
                  Go
                  </Button> */}
        