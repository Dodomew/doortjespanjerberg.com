import React from 'react';
import { TextPropArray } from "../ProjectItem";

const Subtitle = (data : TextPropArray) => {
    return <h4>{data[0].text}</h4>
}

export default Subtitle;