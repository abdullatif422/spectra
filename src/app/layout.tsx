"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {Provider} from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {store} from "./redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import theme from "../theme";
// import ModeSwitch from "../components/ModeSwitch";
import Header from "./features/reusableComponents/header";

// Create an Emotion cache instance
const cache = createCache({ key: "css" }); // Key must be 'css'

/**
 * RootLayout would be the entry point of the entire project
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <CacheProvider value={cache}>
          <InitColorSchemeScript attribute="class" />
          <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>
            {children}
          </ThemeProvider>
          </Provider>
        </CacheProvider>
      </body>
    </html>
  );
}
