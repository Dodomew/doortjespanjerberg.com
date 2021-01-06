import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink, useLocation } from "react-router-dom";
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import usePrismicGetSingle from "../../hooks/usePrismicGetSingle";

interface HeaderProps {
    title: string,
    subtitle: string
}

const Header = () => {
    const [render, setRender] = useState(false);
    const headerDocument = usePrismicGetSingle({ id: "header" });

    useEffect(() => {
        if (headerDocument) {
            setRender(true);
        }
    }, [headerDocument])

    const currentRoute = useLocation();
    console.log(currentRoute)

    const headerTitle = headerDocument?.data.title[0].text ?? "Loading...";
    const headerSubtitle = headerDocument?.data.subtitle[0].text ?? "Loading...";

    return (
        <div className="header container">
            <div className="header__content">
                <Link to={'/'} className="header__link">
                    <h2 className="header__byline" data-text={headerTitle}>
                        <span className="header__byline--stroke" data-text={headerTitle}>
                            {headerTitle}
                        </span>
                        {headerTitle}
                    </h2>
                    <h3 className="header__title" data-text={headerSubtitle}>
                        {headerSubtitle}
                    </h3>
                </Link>
            </div>
            <ul className="header__menu">
                <li>
                    <NavLink exact to="/" className="header__menu-item" activeClassName="is-active">
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

export type { HeaderProps };
export { Header };
