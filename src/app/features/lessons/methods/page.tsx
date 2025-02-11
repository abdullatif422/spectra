import React from "react";
import PageWrapper from "@/src/PageWrapper";
import {Box,Typography} from "@mui/material";


const fruits=[
    {
        id: '1',
        name:'Orange'
    },
    {
        id: '2',
        name:'Kiwi'
    },
    {
        id: '3',
        name:'Apricot'
    },
    {
        id: '4',
        name:'Banana'
    },
    {
        id: '5',
        name:'Strawberry'
    },
    {
        id: '6',
        name:'Guava'
    },
    {
        id: '7',
        name:'Apple'
    },
    {
        id: '8',
        name:'Grapes'
    },
    {
        id: '9',
        name:'Watermelon'
    },
    {
        id: '10',
        name:'Dragonfruit'
    },
    {
        id: '11',
        name:'Papaya'
    },
    {
        id: '12',
        name:'Pineapple'
    },
    {
        id: '13',
        name:'Mango'
    },
    {
        id: '14',
        name:'Pomegranate'
    },
    {
        id: '15',
        name:'Blueberry'
    },
    {
        id: '16',
        name:'Avacado'
    },
    {
        id: '17',
        name:'Custard Apple'
    },
    {
        id: '18',
        name:'Cherries'
    },
    {
        id: '19',
        name:'Pear'
    },
    {
        id: '20',
        name:'Cranberry'
    }
];

export default function FruitsList() {
    return(
        <PageWrapper>
            <Box sx={{
                minHeight:'10vh',
                width:'100%',
                backgroundColor:'purple'
            }}>
                <Typography>List of fruits</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                height:'100%',
                flexGrow:1,
                backgroundColor:'yellow'
            }}>
                <Box sx={{
                    flexDirection:'row',
                    margin: 10
                }}>
                
                    {fruits?.map((el) => {
                        return(
                            <Box key={el.id} sx={{
                                m:4,
                                p:2,
                                backgroundColor:'pink'
                            }}>
                                <Typography>{el?.name}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </PageWrapper>
    )
}