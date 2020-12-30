import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItemTitle from "./ProjectItemTitle";
import withArrayRenderer from "../../HoC/RenderArrayComponent"

interface ProjectItemProps {
    link: string,
    media: {
        alt: string,
        url: string,
        dimensions: {
            width: number,
            height: number
        }
    },
    title: [
        { text: string }
    ],
    subtitle: [
        { text: string }
    ]
}

const testItem = (data: [{text: string}]) => {
    return <h1>{data[0].text}</h1>;
}


const ProjectItem = (data: ProjectItemProps) => {
    if(!data) {
        return null;
    }

    const { title, subtitle, link } = { ...data};
    const { url, dimensions } = { ...data.media};


const MyComponentWithLoading = withArrayRenderer(testItem);

      return(
          <li className="project-listitem">
              <div
                className="project-listitem__media" 
                style={{backgroundImage: "url(" + url + ")"}}></div>
                <div className="project-listitem__content">
                    {/* {title.length && (
                        <h3>{title[0].text}</h3>
                    )}
                    
                    <h4>{subtitle[0].text}</h4>
                    <Link to={link}>Hallo</Link> */}
                    {/* <RenderArrayComponent data={title}/> */}
                    { <MyComponentWithLoading data={subtitle}/> }
                    {/* <ProjectItemTitle data={title} /> */}
                </div>
          </li>
      )
}

export type { ProjectItemProps };
export { ProjectItem };