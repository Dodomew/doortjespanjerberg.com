// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import { PrismicTextProps } from "../../../../types/PrismicTextProps";

const Subtitle = (data: PrismicTextProps) => {
    return <h4 className="project-listitem__subtitle">{data[0].text}</h4>
}

export default Subtitle;