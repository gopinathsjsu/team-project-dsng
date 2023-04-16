
import { useState } from "react"
import "../styles/navbar.css"

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" style={{ fontWeight: 'bold' }} className="brand-name">
                🦈Sharks HealthClub
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>

            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}