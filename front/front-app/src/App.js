import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { UsersProvider } from "./providers/UsersProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <UsersProvider>
          <Router />
        </UsersProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
