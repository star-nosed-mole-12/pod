import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     ///* <Provider store={store}> */
//       <App />
//     {/* </Provider> */}
//   </StrictMode>
// );

root.render(
    <StrictMode>
       <App />
     </StrictMode>
  );