import React from 'react';
import ProjectItemTitle from "./ProjectItemTitle";
import withExistsRenderer from "../../HoC/RenderArrayComponent"

interface TextProp
{
    text : string
}

type TextPropArray = Array<TextProp>;


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
    title: TextPropArray
    subtitle : TextPropArray
}

const Subtitle = (input: TextPropArray ) => {
    return <h2>{input[0].text}</h2>;
}

const Title = (input : TextPropArray) => {
    return <h1>{input[0].text}</h1>
}

const Link = (input : String) => {
    return <p>{input}</p>
}


const ProjectItem = (data: ProjectItemProps) => {
    if(!data) {
        return null;
    }

    // console.log("data", JSON.stringify(data))

    const { title, subtitle, link } = { ...data};
    const { url, dimensions } = { ...data.media};

    const ProjectListItemSubtitle = withExistsRenderer(Subtitle);
    const ProjectListItemTitle = withExistsRenderer(Title);
    const ProjectListItemLink = withExistsRenderer(Link);


      return(
          <li className="project-listitem">
              <div
                className="project-listitem__media" 
                style={{backgroundImage: "url(" + url + ")"}}></div>
                <div className="project-listitem__content">
                    { <ProjectListItemTitle {...title}/> }
                    { <ProjectListItemSubtitle {...subtitle}/> }
                    {/* { <ProjectListItemLink {link} /> } */}
                </div>
          </li>
      )
}
// { [ myVar : P ] }
// P[] 
export type { ProjectItemProps };
export { ProjectItem };