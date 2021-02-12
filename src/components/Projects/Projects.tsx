// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { FunctionComponent, useEffect, useState } from 'react'
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import { ProjectItemProps } from "./ProjectItem/ProjectItem";
import { prismicGetByType } from '../../ApiHelpers/prismicGetByType';
import Fade from '../../hooks/useFadeAnimation';

interface SkeletonProps {
    show: boolean;
}

const SkeletonWrapper: FunctionComponent<SkeletonProps> = ({ show, children }) => {
    if (!show) {
        return (
            <div className="skeleton-project-list">
                {Array(6).fill(0)
                    .map((item, index) => (
                        <div className="skeleton-project-list__item" key={`skeleton-project-listitem${index}`}></div>
                    ))}
            </div>
        )
    }
    else {
        return (
            <>
                {children}
            </>
        )
    }
};

const Projects = () => {
    const [listData, setListData] = useState<ApiSearchResponse>();


    useEffect(() => {
        if (!listData) {

            const queryOptions = { orderings: "[document.last_publication_date desc]" };
            const fetchData = async () => {
                const prismicData = await prismicGetByType({ types: new Set(["project_detail"]), options: queryOptions });
                setListData(prismicData);
            };

            fetchData();
        }
    }, [listData]);

    let projectListItems = null;

    if (listData && listData.results.length > 0) {
        projectListItems = listData.results.map((item, index) => {
            if (item.data) {
                const itemSlug = item.slugs[0];
                const itemData = item.data as ProjectItemProps;
                return (
                    <Fade show={!!itemData} key={item.id}>
                        <ProjectItem {...itemData} slug={itemSlug} index={index} />
                    </Fade>
                )
            }
            return null;
        })
    }

    return (
        <SkeletonWrapper show={!!listData}>
            <div className="project-list">
                {projectListItems}
            </div>
        </SkeletonWrapper>
    )
}

export default Projects;