"use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import { Box,Typography } from "@mui/material";

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
    },

];

export default function ArrayReduce() {
    const [products] = React.useState(product_data);

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <PageWrapper>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "yellow"
                }}
            >
                <Typography>Reduce Logic</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "blue",
                    px: 2,
                    py: 2
                }}
            >
                <Typography
                    sx={{
                        mt: 1,
                    }}
                >
                    Total Price: ₹{totalPrice}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        overflow: "auto"
                    }}
                >
                    {products.map((el) => (
                        <Box
                            key={el.id}
                            sx={{
                                m: 1,
                                p: 1,
                                backgroundColor: "pink"
                            }}
                        >
                            <Box
                                sx={{
                                    flexDirection: "column"
                                }}
                            >
                                <Typography>{el.name}</Typography>
                                <Typography>{el.product}</Typography>
                                <Typography>₹{el.price}</Typography>
                            </Box>
                            
                        </Box>
                    ))}
                </Box>
            </Box>
        </PageWrapper>
    )
}
