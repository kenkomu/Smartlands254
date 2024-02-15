// React
import React from "react";
import "w3-css/w3.css";
//import ReactDOM from 'react-dom';
import App from "./App";
import { createRoot } from "react-dom/client";

// NEAR
// import { Wallet } from "./near-wallet";
// import { ItemsListed } from "./near-interface";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import AppProvider from "./providers/AppProvider";
import {initialData} from './providers/AppProvider'

const CONTRACT_ADDRESS = "0x6fb6baf430b2ffa3b2d65b5e40f7c2d2b90586e1618d31da7483a20860238d2";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
// const wallet = new initialData({ createAccessKeyFor: CONTRACT_ADDRESS });
// Abstract the logic of interacting with the contract to simplify your flow
// const itemsListed = new ItemsListed({
//   contractId: process.env.CONTRACT_NAME,
//   walletToUse: wallet,
// });

// window.nearwallet = wallet;
// window.contractId = process.env.CONTRACT_NAME;

// Setup on page load
window.onload = () => {
  // Assuming sign-in status is false initially, or set it according to your logic
  const isSignedIn = false; 
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <AppProvider>
        <ChakraProvider theme={customTheme}>
          <App
            isSignedIn={isSignedIn}
            contractId={CONTRACT_ADDRESS}
            // Removed wallet prop since you're not using it
          />
        </ChakraProvider>
      </AppProvider>
    </BrowserRouter>
  );
};
