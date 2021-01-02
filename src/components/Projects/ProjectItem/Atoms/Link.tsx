import React from 'react';
import { TextPropArray } from "../ProjectItem";

const Link = (data : TextPropArray) => {
    return <h3>{data[0].text}</h3>
}

export default Link;