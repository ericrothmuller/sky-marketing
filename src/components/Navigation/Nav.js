import Hamburger from "./Hamburger"
import { useState } from "react"

export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className="navigation">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </div>
        </div>
    )
}