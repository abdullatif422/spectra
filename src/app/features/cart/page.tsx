"use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import Header from "../ReusableComponents/Header/Header";
import { Box, Typography, Checkbox } from "@mui/material";

const items_in_cart = [
    {
        id: "01",
        thumbnail: "https://m.media-amazon.com/images/I/41EJ8gbMSLL._SX300_SY300_QL70_FMwebp_.jpg",
        selected: false,
        title: "Vemptico Wooden Floating Shelves",
        description: "6 Piece Hexagonal Shape Mounted Wall Shelf for Bedroom or Living Room",
        expectedDelivery: "Wednesday, 26 February",
        quantity: 1,
        price: { mrp: 1999, sellingPrice: 799 }
    },
    {
        id: "02",
        thumbnail: "https://m.media-amazon.com/images/I/61UtU6HbBHL._SX679_.jpg",
        selected: false,
        title: "TEKCOOL Wall Clock ",
        description: "Classic Analog Round Clock for Room/School/College",
        expectedDelivery: "Saturday, 1 March",
        quantity: 1,
        price: { mrp: 999, sellingPrice: 543 }
    },
    {
        id: "03",
        thumbnail: "https://m.media-amazon.com/images/I/61pUTboMUWL._SX679_.jpg",
        selected: false,
        title: "ROMINO Portable Blender",
        description: "USB-C Rechargeable 2000 mAh Battery, 6 Blades Bottle Juicer",
        expectedDelivery: "Sunday, 2 March",
        quantity: 1,
        price: { mrp: 1499, sellingPrice: 999 }
    },
    {
        id: "04",
        thumbnail: "https://m.media-amazon.com/images/I/61aV0Q2CE1L._SL1500_.jpg",
        selected: false,
        title: "Revlon Salon One-Step Hair Dryer and Volumizer",
        description: "Unique Oval Brush Design for Smoothing the Hair, creates volume designed with Nylon Pin & Tufted Bristles for de-tangling",
        expectedDelivery: "Monday, 10 March",
        quantity: 1,
        price: { mrp: 9776, sellingPrice: 8753 }
    },
    {
        id: "05",
        thumbnail: "https://m.media-amazon.com/images/I/416Wky-H6QL._SX679_.jpg",
        selected: false,
        title: "Clazkit Stainless Steel Water Bottle",
        description: "1000 ml - Single-Walled, Spill-Proof bottle for Work/Gym/travel",
        expectedDelivery: "Saturday, 15 March",
        quantity: 1,
        price: { mrp: 599, sellingPrice: 299 }
    }
];

export default function Cart() {
    const [items,setItems] = React.useState(items_in_cart);
    console.log(items)

    const handleSelection = (id: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    return (
        <PageWrapper>
            <Box>
                <Header
                    title="Shopping Cart"
                    description="Your products are here!"
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    gap: 1,
                    padding: 2,
                    backgroundColor: "lavender"
                }}
            >
                {items?.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            gap: 2,
                            padding: 2,
                            borderRadius: "8px",
                            backgroundColor: "white"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >
                            <Checkbox
                                checked={item.selected}
                                onChange={() => handleSelection(item.id)}
                            />
                            <Box
                                component="img"
                                src={item.thumbnail}
                                alt={item.title}
                                sx={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "fill"
                                }}
                            />
                            <Box
                                sx={{
                                    flex: 1
                                }}
                            >
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1">
                                    {item.description}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="blue"
                                >
                                    Expected Delivery:{item.expectedDelivery}
                                </Typography>
                                <Typography variant="body2">
                                    Quantity:{item.quantity}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textDecoration: "line-through",
                                        color: "black"
                                    }}
                                >
                                    MRP: ₹{item.price.mrp}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    Price:₹{item.price.sellingPrice}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </PageWrapper>
    );
}
