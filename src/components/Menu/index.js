import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Menu.css";

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Header" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu