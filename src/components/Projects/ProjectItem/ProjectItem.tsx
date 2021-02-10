// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import withObjectExistsRenderer from "../../HoC/withObjectExistsRenderer";
import Title from "./Atoms/Title";
import Subtitle from "./Atoms/Subtitle";
import Media from "./Atoms/Media";
import { Link } from 'react-router-dom';
import { PrismicTextProps } from "../../../types/PrismicTextProps";

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

interface ProjectItemProps {
    slug: string,
    link: string,
    media: {
        alt: string,
        url: string,
        dimensions: {
            width: number,
            height: number
        }
    },
    title: PrismicTextProps,
    subtitle: PrismicTextProps,
    index: number
}

const ProjectItem = (data: ProjectItemProps) => {
    if (!data) {
        return null;
    }

    const { title, subtitle, index } = { ...data };
    const ProjectListItemSubtitle = withObjectExistsRenderer(Subtitle);
    const ProjectListItemTitle = withObjectExistsRenderer(Title);

    return (
        <div className="project-listitem">
            <Link to={"projects/" + data.slug} className="project-listitem__wrapper">
                <Media {...data.media} index={index} />
                <div className="project-listitem__content">
                    <div className="project-listitem__text">
                        <ProjectListItemTitle {...title} />
                        <ProjectListItemSubtitle {...subtitle} />
                    </div>
                    <span className="project-listitem__link">
                        View project
                    </span>
                </div>
            </Link>
        </div >

    )
}

export type { ProjectItemProps };
export { ProjectItem };