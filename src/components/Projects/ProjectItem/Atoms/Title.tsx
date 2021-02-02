import React from 'react';
import { TextPropArray } from "../ProjectItem";

const Title = (data: TextPropArray) => {
    return <h3 className="project-listitem__title">{data[0].text}</h3>
}

export default Title;