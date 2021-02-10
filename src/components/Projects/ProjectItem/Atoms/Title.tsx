import React from 'react';
import { PrismicTextProps } from "../../../../types/PrismicTextProps";

const Title = (data: PrismicTextProps) => {
    return <h3 className="project-listitem__title">{data[0].text}</h3>
}

export default Title;