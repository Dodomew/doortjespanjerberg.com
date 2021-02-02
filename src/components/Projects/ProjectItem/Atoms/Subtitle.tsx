import React from 'react';
import { PrismicTextProp } from "../../../../types/PrismicTextProp";

const Subtitle = (data: PrismicTextProp) => {
    return <h4 className="project-listitem__subtitle">{data[0].text}</h4>
}

export default Subtitle;