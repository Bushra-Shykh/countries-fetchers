import React from "react"
import { HeroBanner } from "../UI/HeroBanner";
import { About } from "./About"
import { Contact } from "./Contact"

export const Home = () => {
    return (
        <>
            <HeroBanner/>
            <About/>
            <Contact/>
        </>
    );
}


