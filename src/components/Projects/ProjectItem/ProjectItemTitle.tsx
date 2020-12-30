import React from 'react';
import withArrayRenderer from "../../HoC/RenderArrayComponent";

interface ProjectItemTitleProps {
    [index: number] : { text: string }
}

const ProjectItemTitle = (data : ProjectItemTitleProps) => {
    return <h3>{data[0].text}</h3>
}

export default withArrayRenderer(ProjectItemTitle);