"use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import { Box, Button, TextField, Typography } from "@mui/material";

const sample_fruits = [
  {
    id: "1",
    title: "Banana",
    description: "I ate Banana usually in the morning on an empty stomach",
  },
  {
    id: "2",
    title: "Apple",
    description: "An apple a day keeps the doctor away",
  },
  {
    id: "3",
    title: "Grapes",
    description: "Grapes are good for health",
  },
];

export default function ArrayPush() {
  const [fruits, setFruits] = React.useState(sample_fruits);
  const [new_fruit, setnew_fruit] = React.useState("");

  const showAlert = (el: any) => {
    alert(JSON.stringify(el));
  };

  const handleNewfruitOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cbValue = event?.target?.value;
    setnew_fruit(cbValue);
  };

  const handleOnEnterClick = () => {
    const newFruitObj = {
      id: `${fruits?.length + 1}`,
      title: new_fruit,
      description: `I ate ${new_fruit}`,
    };

    const newArray = [...fruits];
    newArray.push(newFruitObj);
    setFruits(newArray);
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "lightblue",
        }}
      >
        <Typography>Push Logic</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100vh - 100px",
          flexGrow: 1,
          backgroundColor: "orange",
          flexDirection: "column",
          px: 2,
          py: 2,
        }}
      >
        <TextField
          label="Adding new fruit"
          value={new_fruit}
          placeholder="Search fruits by key word"
          onChange={handleNewfruitOnChange}
          sx={{
            mt: 1,
            backgroundColor: "#FFF",
          }}
        />

        <Button size="medium" variant="contained" onClick={handleOnEnterClick}>
          Enter
        </Button>

        <Box
          sx={{
            flexDirection: "row",
            maxHeight: "60vh",
            overflow: "scroll",
          }}
        >
          {fruits?.map((el) => {
            return (
              <Box
                key={el.id}
                sx={{
                  m: 1,
                  p: 1,
                  backgroundColor: "lightblue",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Typography>{el?.title}</Typography>
                    <Typography>{el?.description}</Typography>
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => showAlert(el)}
                  >
                    Show my Info
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </PageWrapper>
  );
}
