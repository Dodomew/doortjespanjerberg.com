import React, { useEffect } from "react";
import { withRouter, RouteComponentProps, useLocation } from "react-router-dom";

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
// https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version

interface ScrollToTopProps extends RouteComponentProps {
    children: JSX.Element;
}

function ScrollToTop({ children }: ScrollToTopProps) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]);

    return <>{children}</>;
}

export default withRouter(ScrollToTop);