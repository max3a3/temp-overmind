import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
} from "@chakra-ui/react"
import { Switch, Route } from "wouter"
import { Appbar } from "./common/AppBar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Appbar />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Switch>
          <Route path="/">
            <Text mt={100}>Home</Text>
          </Route>
          <Route path="/home">
            <Text mt={100}>Home</Text>
          </Route>
          <Route path="/page1">
            <Text mt={100}>Page 1</Text>
          </Route>
        </Switch>
      </Grid>
    </Box>
  </ChakraProvider>
)
