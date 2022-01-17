import "./App.css"
import React from "react";

import Home from "./Home";
import Dog from "./Components/Dog";
import Shop from "./Components/Shop";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <div>
      
        

            <Routes>

                <Route path="/"
                    element={<Home/>}
                />

            
                <Route path="/rescue"
                    element={<Dog/>}
                />

                <Route path="/shop"
                    element={<Shop/>}
                />


            
            </Routes> 
      
   

        </div>
    )
}

export default App;