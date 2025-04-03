import Hamburger from "./Hamburger"

export default function Nav(){
    return (
        <div>
            <div className="navigation">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <div className="hamburger">
                    <Hamburger />
                </div>
            </div>
        </div>
    )
}