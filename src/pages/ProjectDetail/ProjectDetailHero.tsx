import React, { FunctionComponent } from 'react';
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

type heroImageGrid = {
    data?: PrismicImageProps;
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

export const HeroImagesGrid = (media: heroImageGrid) => {
    const heroImageGrid = Array(4).fill(0)
        .map((item, index) => (
            <div className="project-detail__hero-media-item" key={`project-detail__hero-media-item${index}`}>
                <div className="project-detail__hero-image-wrapper">
                    {
                        media.data && media.data.url && (
                            <img className="project-detail__hero-image"
                                src={media.data.url}
                                alt={media.data.alt ? media.data.alt : ""}>
                            </img>
                        )
                    }
                </div>
            </div>
        ))

    return (
        <div className={`project-detail__hero ${media.data == null ? 'is-skeleton' : ''}`}>
            <div className="project-detail__hero-media">
                <div className="project-detail__hero-media-wrapper">
                    {heroImageGrid}
                </div>
            </div>
            {
                !media.data && (
                    <div className="project-detail__hero-content">
                        <div className="project-detail__hero-text">
                            <h2 className="project-detail__hero-title"></h2>
                            <h3 className="project-detail__hero-subtitle"></h3>
                        </div>
                        <a href="#" className="project-detail__hero-link"></a>
                    </div>
                )
            }
        </div>
    );
};



const ProjectDetailHero = (data: ProjectDetailHeroProps) => {
    const { title, subtitle, media, link } = { ...data };

    const HeroTitle = withObjectExistsRenderer(Title);
    const HeroSubtitle = withObjectExistsRenderer(Subtitle);
    const HeroLink = withObjectExistsRenderer(Link);

    return (
        <div className="project-detail__hero">
            <HeroImagesGrid data={media} />
            <div className="project-detail__hero-content">
                <div className="project-detail__hero-text">
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