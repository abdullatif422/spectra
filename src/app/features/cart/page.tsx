 "use client";

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import {Box,Button, Checkbox, IconButton, Typography,} from "@mui/material";
import Header from "../ReusableComponents/Header/Header";
import  DeleteIcon from "@mui/icons-material/Delete";

 const cart_Items=[
    {
        id:"01",
        thumbnail:"https://m.media-amazon.com/images/I/41EJ8gbMSLL._SX300_SY300_QL70_FMwebp_.jpg",
        selected:false,
        title:"Vemptico Wooden Floating Shelves",
        description:"6 Piece Hexagonal Shape Mounted Wall Shelf for Bedroom or Living Room",
        expectedDelivery:"Wednesday, 26 February",
        quantity:1,
        price:{mrp:1999,sellingPrice:799}
    },
    {
        id:"02",
        thumbnail:"https://m.media-amazon.com/images/I/61UtU6HbBHL._SX679_.jpg",
        selected:false,
        title:"TECKCOOL Wall Clock",
        description:"Classic Analog Round Clock for Room/School/College",
        expectedDelivery:"Saturday, 1 March",
        quantity:1,
        price:{mrp:999,sellingPrice:543}
    },
    {
        id:"03",
        thumbnail:"https://m.media-amazon.com/images/I/61pUTboMUWL._SX679_.jpg",
        selected:false,
        title:"ROMINO Portable Blender",
        description:"USB-C Rechargeable 2000 mAh Battery, 6 Blades Bottle Juicer",
        expectedDelivery:"Sunday, 2 March",
        quantity:1,
        price:{mrp:1499,sellingPrice:999}

    },
    {
        id:"04",
        thumbnail:"https://m.media-amazon.com/images/I/61aV0Q2CE1L._SL1500_.jpg",
        selected:false,
        title:"Revlon Salon One-Step Hair Dryer and Volumizer",
        description:"Unique Oval Brush Design for Smoothing the Hair, creates volume designed with Nylon Pin & Tufted Bristles for de-tangling",
        expectedDelivery:"Monday, 10 March",
        quantity:1,
        price:{mrp:9776,sellingPrice:8753}
    },
    {
        id:"05",
        thumbnail:"https://m.media-amazon.com/images/I/416Wky-H6QL._SX679_.jpg",
        selected:false,
        title:"Clazkit Stainless Steel Water Bottle",
        description:"1000 ml - Single-Walled, Spill-Proof bottle for Work/Gym/travel",
        expectedDelivery:"Saturday, 15 March",
        quantity:1,
        price:{mrp:599,sellingPrice:299}
    },
];

export default function Cart() {
    const [items, setItems] = React.useState(cart_Items);
    const [search, setSearch] = React.useState("");
    

    const handleOnSearchClick = () => {
        setItems((prevItems) =>
            prevItems.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    const handleOnClearClick=()=>{
        setSearch("");
        setItems(cart_Items);
    };

    const handleOnDeleteSelectedItems=()=>{
        const idsSelected=items.filter((item)=>item.selected)
        .map((item)=>item.id);
        const updatedItems=items.filter((item)=>!idsSelected.includes(item.id));
        setItems(updatedItems);
    };

    const handleOnDeleteOneItem=(id:string)=>{
        setItems((prevItems)=>prevItems.filter((item)=>item.id!==id));
    };

    const handleOnQuantityChange=(id:string,operation:string)=>{
        setItems((prevItems)=>prevItems?.map((item)=>{
            if (item.id==id) {
                let newQuantity=item.quantity;
                if (operation=="plus"){
                    newQuantity+=1;
                }
                else if(operation=="minus" && newQuantity > 1){
                    newQuantity-=1;
                }
                return{...item,quantity:newQuantity};
            }
            return item;
        }))
    };

    // const handleOnQuantityChange=(id:string,operation:string)=>{
    //     setItems((prevItems) => prevItems?.map((item) => {
    //         if(item.id == id){
    //             const newQuantity =
    //             operation == "plus" ? item.quantity + 1
    //             : operation == "minus" && item.quantity > 1 ? item.quantity - 1
    //             : item.quantity;
                
    //             return { ...item, quantity: newQuantity };
    //         }
    //         return item;
    //     }));
    // };

    const handleSelection = (id: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id == id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const totalPrice=items.reduce((sum,item)=>sum+item.quantity*item.price.sellingPrice,0);

    return (
        <PageWrapper>
            <Box>
                <Header
                    title="Shopping Cart"
                    description="Your products are here!"
                    actions={[
                        {
                            id: "1",
                            name: "Search",
                            placeholder: "items",
                            type: "text",
                            value: search,
                            onChange: (el: any) => setSearch(el.target.value)
                        },
                        {
                            id: "2",
                            name: "Search",
                            type: "Button",
                            onClick: () => handleOnSearchClick()
                        },
                        {
                            id: "3",
                            name: "Clear",
                            type: "Button",
                            onClick:()=>handleOnClearClick()
                        },
                        {
                            id: "4",
                            name: "Delete",
                            type: "Button",
                            onClick:()=>handleOnDeleteSelectedItems()
                        }
                    ]}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height:"80vh",
                    overflow:"auto",
                    gap: 2,
                    padding: 2,
                    backgroundColor: "purple",
                    
                }}
            >
                {items?.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            padding: "8px",
                            borderRadius: "8px",
                            backgroundColor: "white"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
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
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "fill"
                                }}
                            />
                            <Box
                                sx={{
                                    flex:1
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
                                    Expected Delivery: {item.expectedDelivery}
                                </Typography>
                                <Typography variant="body2">
                                    Quantity:
                                </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={()=>handleOnQuantityChange(item.id,"minus")}
                                        >
                                            -
                                        </Button>
                                        <Typography>{item.quantity}</Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={()=>handleOnQuantityChange(item.id,"plus")}

                                        >
                                            +
                                        </Button>
                                    </Box>
                                
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textDecoration:"line-through"
                                        
                                    }}>
                                        MRP:₹{item.price.mrp}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight:"bold"
                                    }}>
                                        Selling Price:₹{item.price.sellingPrice}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight:"bold"
                                    }}>
                                        Quantity Based Price:₹{item.quantity * item.price.sellingPrice}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    color="default"
                                    onClick={()=>handleOnDeleteOneItem(item.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    display:"flex",
                    justifyContent:"space-between",
                }}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >
                        Total Price:
                    </Typography>
                    <Typography
                        variant="h6"
                        color="primary">
                            ₹{totalPrice}
                    </Typography>
            </Box>
        </PageWrapper>
    );
}

    

