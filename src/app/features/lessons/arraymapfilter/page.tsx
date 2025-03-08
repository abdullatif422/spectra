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
  {
    id: "4",
    title: "Pineapple",
    description: "Pineapple is good for health",
  },
  {
    id: "5",
    title: "Orange",
    description: "Oranges are rich in Vitamin C",
  },
  {
    id: "6",
    title: "Strawberry",
    description: "Strawberries are delicious and nutritious",
  },
  {
    id: "7",
    title: "Mango",
    description: "Mangoes are known as the king of fruits",
  },
  {
    id: "8",
    title: "Blueberry",
    description: "Blueberries are high in antioxidants",
  },
  {
    id: "9",
    title: "Watermelon",
    description: "Watermelons are refreshing and hydrating",
  },
  {
    id: "10",
    title: "Peach",
    description: "Peaches are juicy and sweet",
  },
  {
    id: "11",
    title: "Cherry",
    description: "Cherries are small and packed with nutrients",
  },
  {
    id: "12",
    title: "Pear",
    description: "Pears are soft and sweet",
  },
  {
    id: "13",
    title: "Kiwi",
    description: "Kiwis are rich in Vitamin C and fiber",
  },
  {
    id: "14",
    title: "Papaya",
    description: "Papayas are good for digestion",
  },
  {
    id: "15",
    title: "Plum",
    description: "Plums are sweet and tart",
  },
  {
    id: "16",
    title: "Pomegranate",
    description: "Pomegranates are rich in antioxidants",
  },
  {
    id: "17",
    title: "Guava",
    description: "Guavas are high in Vitamin C",
  },
  {
    id: "18",
    title: "Lychee",
    description: "Lychees are sweet and fragrant",
  },
];

export default function MapFilter() {
  const [fruits, setFruits] = React.useState(sample_fruits);
  const [filterBy, setFilterBy] = React.useState("");

  const handleFruitsFilter = (el: any) => {
    console.log("Fruit clicked:", el);
    const updatedFruits = fruits?.filter((item) => item.id === el.id);
    setFruits(updatedFruits);
    console.log({ updatedFruits });
  };

  const showAlert = (el: any) => {
    alert(JSON.stringify(el));
  };
const handleFilterBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cbValue = event?.target?.value.toLowerCase();
    setFilterBy(cbValue);
    const findFruits = sample_fruits.filter((el) =>
      el.title.toLowerCase().includes(cbValue)
    );
    setFruits(findFruits);
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "lightblue",
        }}
      >
        <Typography>Map and Filter logic</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100vh - 100px",
          flexGrow: 11,
          backgroundColor: "pink",
          flexDirection: 'column',
          px: 2,
          py: 2
        }}
      >
        <TextField
            label="Enter Fruit"
            value={filterBy}
            placeholder="Search fruits by keyword"
            onChange={handleFilterBy}
            sx={{
                mt: 2,
                backgroundColor: 'white'
            }}
         />

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
                  m: 4,
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
