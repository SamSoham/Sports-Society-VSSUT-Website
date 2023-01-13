import { useState } from "react";

const Navbar1 = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <a href="#"><img src="vssut.png"  />ILLUMINA VSSUT</a>
                </div>
                <div className="burger-menu" onClick={updateMenu} >
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <ul className={menu_class}>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <button>Register</button>
                </ul>
            </nav>
            
        </>
   
    );
}
 
export default Navbar1;