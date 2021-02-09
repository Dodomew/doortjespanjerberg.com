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

export const HeroImagesGrid: FunctionComponent = React.memo(() => {
    return (
        <div className="project-detail__hero is-skeleton">
            <div className="project-detail__hero-media">
                <div className="project-detail__hero-media-wrapper">
                    {Array(4).fill(0)
                        .map((item, index) => (
                            <div className="project-detail__hero-media-item" key={`project-detail__hero-media-item${index}`}>
                                <div className="project-detail__hero-image-wrapper"></div>
                            </div>

                        ))}
                </div>
            </div>
            <div className="project-detail__hero-content">
                <div className="project-detail__hero-text">
                    <h2 className="project-detail__hero-title"></h2>
                    <h3 className="project-detail__hero-subtitle"></h3>
                </div>
                <a href="#" className="project-detail__hero-link"></a>
            </div>
        </div>

    );
});



const ProjectDetailHero = (data: ProjectDetailHeroProps) => {
    const { title, subtitle, media, link } = { ...data };

    const HeroTitle = withObjectExistsRenderer(Title);
    const HeroSubtitle = withObjectExistsRenderer(Subtitle);
    const HeroLink = withObjectExistsRenderer(Link);

    const HeroImagesGrid: FunctionComponent = React.memo(() => {
        return (
            <>
                {Array(4).fill(0)
                    .map((item, index) => (
                        <div className="project-detail__hero-media-item" key={`project-detail__hero-media-item${index}`}>
                            <div className="project-detail__hero-image-wrapper">
                                {media.url && (
                                    <img className="project-detail__hero-image" src={media.url} ></img>
                                )}
                            </div>
                        </div>
                    ))}
            </>
        );
    });

    return (
        <div className="project-detail__hero">
            <div className="project-detail__hero-media">
                <div className="project-detail__hero-media-wrapper">
                    <HeroImagesGrid />
                </div>
            </div>
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