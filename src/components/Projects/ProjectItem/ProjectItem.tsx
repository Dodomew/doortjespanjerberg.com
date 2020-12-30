import React from 'react';
import withExistsRenderer from "../../HoC/RenderArrayComponent"

/*
    Prismic API sends a normal text input as follows:

    key: [
        {
            key: value
        }
    ]

    To check if this object is valid, we put it through a generic HoC which takes a generic <T> that extends an object
    Because we have to type it like the Prismic API, we have to type it in 2 steps: first the key/value, then the wrapper
    or container it is in, in this case an Array. Therefor you get TextPropArray, which is an Array containing TextProps

    We then say to the components Title and Subtitle that their expected prop input is of type TextPropArray
    We also pass the object/array containing the key/value as a prop to the HoC which checks validity

    If it's all good, the HoC returns the original component and we can render it without doing extra checks
*/
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