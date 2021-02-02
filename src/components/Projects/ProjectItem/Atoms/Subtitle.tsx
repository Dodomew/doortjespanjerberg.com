import React from 'react';
import { TextPropArray } from "../ProjectItem";

const Subtitle = (data: TextPropArray) => {
    return <h4 className="project-listitem__subtitle">{data[0].text}</h4>
}

export default Subtitle;