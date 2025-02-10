"use client";
import React from "react";
import { Container, ContainerProps } from "@mui/material";

interface PageWrapperPropTypes extends ContainerProps {
  children?: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperPropTypes) {
  const { children, ...restProps } = props;
  return (
    <Container
      {...restProps}
      maxWidth="xl"
      sx={{
        py: 4,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Container>
  );
}
