import { useState } from "react"

function NavBar() {

    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <nav className="hidden lg:flex desktop">
        <div className="navbar">
        <div className="logo">
        <p><a href="#">Spin <span>Finance</span></a></p>
        </div>

            <ul className="nav-menu">
                <li>
                    <a href="#">Platform</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
            </ul>

            <div className="login-signup">
                <button className="logup">
                    Login
                </button>
                <button className="logup">
                    Sign Up
                </button>
            </div>

        </div>
        </nav>

        {/* Mobile */}
        <nav className="mobile flex lg:hidden">
            <div className="mobile-navbar">
                <div className="mobile-logo">
                <p><a href="#">Spin <span>Finance</span></a></p>
                </div>
               
                <button className="nav-toggle" onClick={handleClick}>
                    <div className={`hamburger ${isOpen ? "fa-solid fa-bars text-specialYellow" : "fa-solid fa-xmark"}`}>
                    </div>
                </button>

                <ul className={`mobile-nav-menu ${isOpen ? 'close' : 'open'}`}>
                <li>
                    <a href="#">Platform</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>

                <div className="mobile-login-signup">
                <button className="mobile-logup">
                    Login
                </button>
                <button className="mobile-logup">
                    Sign Up
                </button>
            </div>
            </ul>
            
            </div>
        </nav>
        </>
    )
}

export default NavBar