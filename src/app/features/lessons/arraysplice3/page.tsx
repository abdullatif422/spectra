// Replacing products using splice method

"use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import { Box, Button, Typography } from "@mui/material";

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
];

export default function ArraySplice3() {
    const [products, setProducts] = React.useState(product_data);

    const showAlert = (el: any) => {
        alert(JSON.stringify(el));
    };

    const handleOnEnterClick = () => {
        const newProduct = {
            id: `${products?.length + 1}`,
            name: "Ramesh",
            product: "Watch",
            price: 3000,
            category: "Accessories",
        };
        const newProducts = [...products];
        newProducts.splice(1,1, newProduct);
        setProducts(newProducts);
    };

    return (
        <PageWrapper>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "pink",
                }}
            >
                <Typography>Splice3 Logic</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    height: "100vh-100px",
                    flexGrow: 1,
                    flexDirection: "column",
                    backgroundColor: "black",
                    px: 2,
                    py: 2,
                }}
            >
                <Button variant="contained" onClick={handleOnEnterClick}>
                    Splice
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        overflow: "auto",
                    }}
                >
                    {products?.map((el) => {
                        return (
                            <Box
                                key={el.id}
                                sx={{
                                    m: 1,
                                    p: 1,
                                    backgroundColor: "orange",
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
                                        <Typography>{el?.name}</Typography>
                                        <Typography>{el?.product}</Typography>
                                        <Typography>{el?.price}</Typography>
                                    </Box>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => showAlert(el)}
                                    >
                                        Info
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
