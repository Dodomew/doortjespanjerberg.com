import React from 'react';
import { PrismicTextProp } from "../../../../types/PrismicTextProp";

const Title = (data: PrismicTextProp) => {
    return <h3 className="project-listitem__title">{data[0].text}</h3>
}

export default Title;