"use client"

import React from "react";
import PageWrapper from "@/src/PageWrapper";
import { Box, Typography } from "@mui/material";


export default function Lessons() {

    const [fruits, setFruits] = React.useState([
        {
            id: '1',
            title: 'Bannana',
            description: 'I ate Bannan usally in morning empty stomach'
        },
        {
            id: '2',
            title: 'Apple',
            description: 'An apple a day keeps doctor away'
        }
    ]);

    const handleFruitsFilter = (el: any) => {
        console.log('Fruit clicked:', el);
        const updatedFruits = fruits?.filter((item) => item.id === el.id);
        setFruits(updatedFruits);
        console.log({ updatedFruits });
    };


    return (
        <PageWrapper>
            <Box sx={{
                minHeight: '10vh',
                width: '100%',
                backgroundColor: 'purple'
            }}>

                <Typography>Lessons What I had learn</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                height: '100%',
                flexGrow: 1,
                backgroundColor: 'yellow'
            }}>
                <Box sx={{
                    flexDirection: 'row',
                    margin: 10
                }}>

                    {fruits?.map((el) => {
                        return (
                            <Box key={el.id} sx={{
                                m: 5,
                                p: 2,
                                backgroundColor: 'orange'
                            }}>
                                <Typography>{el?.title}</Typography>
                                <Typography>{el?.description}</Typography>
                                <Typography sx={{ pt: 1 }} onClick={() => handleFruitsFilter(el)} >Filter</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </PageWrapper>
    )
}