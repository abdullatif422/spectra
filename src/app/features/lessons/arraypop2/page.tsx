// removing items from the list of products
"use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import { Box, Button, TextField, Typography } from "@mui/material";

const product_data = [
    {
        id: "101",
        name: "Smith",
        product: "Phone",
        price: 20000,
        category: "Electronics",
    },
    {
        id: "102",
        name: "John",
        product: "Laptop",
        price: 50000,
        category: "Electronics",
    },
    {
        id: "103",
        name: "Doe",
        product: "Shirt",
        price: 500,
        category: "Clothing",
    },
    {
        id: "104",
        name: "Raj",
        product: "Trousers",
        price: 1000,
        category: "Clothing",
    },
    {
        id: "105",
        name: "Rahul",
        product: "Footwear",
        price: 1500,
        category: "Fashion",
    },
    {
        id: "106",
        name: "Ramesh",
        product: "Watch",
        price: 3000,
        category: "Accessories",
    },
    {
        id: "107",
        name: "Suresh",
        product: "Televison",
        price: 30000,
        category: "Electronics",
    },
    {
        id: "108",
        name: "Rajesh",
        product: "Sunglasses",
        price: 1600,
        category: "Accessories",
    },
    {
        id: "109",
        name: "Kumar",
        product: "Study Table",
        price: 5000,
        category: "Furniture",
    },
    {
        id: "110",
        name: "Ravi",
        product: "Headphones",
        price: 2000,
        category: "Electronics",
    }
];

export default function ArrayPop2() {
    const [products, setProducts] = React.useState(product_data);

    const handleOnEnterClick = () => {
        if (products.length > 0) {
            const newArray = [...products];
            newArray.pop();
            setProducts(newArray);
        }
    };

    return (
        <PageWrapper>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "lightblue",
                    p: 1,
                }}
            >
                <Typography>Pop2 Logic</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    height: "100vh - 100px",
                    flexGrow: 1,
                    backgroundColor: "purple",
                    flexDirection: "column",
                    px: 2,
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "lightgreen",
                        mb: 2,
                        p: 2,
                    }}
                >
                    <TextField
                        label="Enter Product"
                        placeholder="Name"
                        sx={{
                            backgroundColor: "white",
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleOnEnterClick}
                        sx={{
                            backgroundColor: "blue",
                            color: "white"
                        }}
                    >
                        Pop
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "pink",
                    }}
                >
                    {products?.map((el) => {
                        return (
                            <Box
                                key={el.id}
                                sx={{
                                    m: 1,
                                    p: 1,
                                    backgroundColor: "lightblue",
                                    width: "20%",
                                }}
                            >
                                <Typography>{el.product}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </PageWrapper>
    )
}