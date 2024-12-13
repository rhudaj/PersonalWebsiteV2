import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Navigation() {
    return (
        <nav>
            <ul className="NST">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/school">School</NavLink>
                </li>
                <li>
                    <NavLink to="/art">Art</NavLink>
                </li>
            </ul>
        </nav>
    );
}

function FullMenu() {
    return (
        <div id="FullMenu">
            <p id="Logo">
                <span style={{ color: "red" }}>R</span>oman.
            </p>
            <Navigation />
        </div>
    );
}

function HiddenMenu(props: { callback: any }) {
    return (
		<div id="HiddenMenu" onClick={props.callback}>
			<p>≡</p>
		</div>
    );
}

export function Menu() {
    const [show, setShow] = useState(true);
    const scroll_threshold = 50;

    const controlNavbar = () => {
        if (show && window.scrollY > scroll_threshold) {
            // if scroll down hide the navbar
            setShow(false); // remember current page location to use in the next move
        } else if (!show && window.scrollY < scroll_threshold) {
            setShow(true);
        }
    };

    window.addEventListener("scroll", controlNavbar);

	return show ? <FullMenu /> : <HiddenMenu callback={setShow} />;
}
