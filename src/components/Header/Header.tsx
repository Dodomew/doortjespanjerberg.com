import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import { prismicGetSingle } from "../../ApiHelpers/prismicGetSingle";

interface HeaderProps {
    title: string,
    subtitle: string
}

const Header = () => {
    const [header, setHeader] = useState<PrismicDocument>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const prismicData = await prismicGetSingle({ id: "header", options: {} });
        setHeader(prismicData);
    };

    const headerTitle = header?.data.title[0].text ?? "Loading...";
    const headerSubtitle = header?.data.subtitle[0].text ?? "Loading...";

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

export type { HeaderProps };
export { Header };
