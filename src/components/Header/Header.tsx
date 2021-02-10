// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header container">
            <div className="header__content">
                <Link to={'/'} className="header__link">
                    <h2 className="header__byline" data-text={"Doortje Spanjerberg"}>
                        <span className="header__byline--stroke" data-text={"Doortje Spanjerberg"}>
                            Doortje Spanjerberg
                        </span>
                        Doortje Spanjerberg
                    </h2>
                    <h3 className="header__title" data-text={"Frontend Developer"}>
                        Frontend Developer
                    </h3>
                </Link>
            </div>
            <ul className="header__menu">
                <li>
                    <NavLink strict to="/projects" className="header__menu-item" activeClassName="is-active">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" className="header__menu-item" activeClassName="is-active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export { Header };
