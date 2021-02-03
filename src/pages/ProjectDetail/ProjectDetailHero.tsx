import React from 'react';
import withObjectExistsRenderer from '../../components/HoC/withObjectExistsRenderer';
import { PrismicTextProp } from '../../types/PrismicTextProp';
import { PrismicImageProps } from "../../types/PrismicImageProps";
import { PrismicLinkProps } from "../../types/PrismicLinkProps";

interface ProjectDetailHeroProps {
    link: PrismicLinkProps
    media: PrismicImageProps;
    subtitle: PrismicTextProp
    title: PrismicTextProp
}

const Title = (data: PrismicTextProp) => {
    return (
        <h2 className="project-detail__hero-title">{data[0].text}</h2>
    )
}

const Subtitle = (data: PrismicTextProp) => {
    return (
        <h3 className="project-detail__hero-subtitle">{data[0].text}</h3>
    )
}

const Link = (data: PrismicLinkProps) => {
    return (
        <a href={data.url} target={data.target} className="project-detail__hero-link">View</a>
    )
}

const ProjectDetailHero = (data: ProjectDetailHeroProps) => {
    const { title, subtitle, media, link } = { ...data };

    const HeroTitle = withObjectExistsRenderer(Title);
    const HeroSubtitle = withObjectExistsRenderer(Subtitle);
    const HeroLink = withObjectExistsRenderer(Link);

    return (
        <div className="project-detail__hero">
            <div style={{ backgroundImage: `url(${media.url})` }} className="project-detail__hero-media">
                <div className="project-detail__hero-content">
                    <div className="project-detail__hero-text">
                        <HeroTitle {...title} />
                        <HeroSubtitle {...subtitle} />
                    </div>
                    <HeroLink {...link} />
                </div>
            </div>
        </div>
    )
}

export type { ProjectDetailHeroProps };
export { ProjectDetailHero };