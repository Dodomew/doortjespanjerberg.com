import React, { Fragment } from 'react'
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash

const Homepage = () => {
    return(
        <div>
            <h1>Homepage</h1>
        </div>
    )
}

export default Homepage;