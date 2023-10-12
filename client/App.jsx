import React from "react";

import Pages from "./pages/pageLayout/Layout";
import { AllListings } from "./pages/AllListings/AllListings.jsx";

const App  = () => {

    return (
        <div>
            <h1>welcome to the app</h1>
            {/* < Pages /> */}
            < AllListings />
            
        </div>
    )
}

export default App;