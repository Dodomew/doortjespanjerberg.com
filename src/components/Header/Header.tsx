import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import usePrismicGetSingle from "../../hooks/usePrismicGetSingle";

interface HeaderProps {
    title: string,
    subtitle: string
}

const Header = () => {
    const [render, setRender] = useState(false);
    const headerDocument = usePrismicGetSingle({ id: "header"});

    useEffect(() => {
        if(headerDocument) {
            setRender(true);
        }
    }, [headerDocument])

    const headerTitle = headerDocument?.data.title[0].text ?? "Loading...";
    const headerSubtitle = headerDocument?.data.subtitle[0].text ?? "Loading...";

    return (
        <div className="header">
            <div className="header__content">
                <Link to={'/'} className="header__link">
                    <h2 className="header__byline">
                        <span className="header__text">
                            {headerTitle}
                        </span>
                    </h2>
                    <h3 className="header__title">
                        <span className="header__text">
                            {headerSubtitle}
                        </span>
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export type { HeaderProps };
export { Header };
