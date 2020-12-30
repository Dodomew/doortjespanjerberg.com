import React from 'react'
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import Projects from "../../components/Projects/Projects";

const Homepage = () => {
    return(
        <div className="container">
            <Projects />
        </div>
    )
}

export default Homepage;