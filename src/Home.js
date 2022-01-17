import React from "react";
import NavBar from "./Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";


function Home() {
    return (
        <div>
            <NavBar/>
            <h1>Hello world</h1>
            <Footer/>
        </div>
    )
}

export default Home;