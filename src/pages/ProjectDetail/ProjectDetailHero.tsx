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
        <h2>{data[0].text}</h2>
    )
}

const Subtitle = (data: PrismicTextProp) => {
    return (
        <h3>{data[0].text}</h3>
    )
}

const Image = (data: PrismicImageProps) => {
    return (
        <div style={{ backgroundImage: `url(${data.url})` }} className="project-detail__hero-media"></div>
    )
}

const Link = (data: PrismicLinkProps) => {
    return (
        <a href={data.url} target={data.target}>Link</a>
    )
}

const ProjectDetailHero = (data: ProjectDetailHeroProps) => {
    const { title, subtitle, media, link } = { ...data };

    const HeroTitle = withObjectExistsRenderer(Title);
    const HeroSubtitle = withObjectExistsRenderer(Subtitle);
    const HeroImage = withObjectExistsRenderer(Image);
    const HeroLink = withObjectExistsRenderer(Link);

    return (
        <div className="project-detail__hero">
            <HeroImage {...media} />
            <div className="project-detail__content">
                <div className="project-detail__text">
                    <HeroTitle {...title} />
                    <HeroSubtitle {...subtitle} />
                </div>
                <HeroLink {...link} />
            </div>
        </div>
    )
}

export type { ProjectDetailHeroProps };
export { ProjectDetailHero };