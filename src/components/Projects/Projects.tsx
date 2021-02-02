import React, { useEffect, useState } from 'react'
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import { ProjectItemProps } from "./ProjectItem/ProjectItem";
import { prismicGetByType } from '../../ApiHelpers/prismicGetByType';

const Projects = () => {
    const [listData, setListData] = useState<ApiSearchResponse>();
    const queryOptions = { orderings: "[my.dialogue_page.date desc]" };

    useEffect(() => {
        if (!listData) {
            fetchData();
        }
    }, [listData]);

    const fetchData = async () => {
        const prismicData = await prismicGetByType({ types: new Set(["project_detail"]), options: queryOptions });
        setListData(prismicData);
    };

    let projectListItems = null;

    if (listData && listData.results.length > 0) {
        projectListItems = listData.results.map((item, index) => {
            if (item.data) {
                const itemSlug = item.slugs[0];
                const itemData = item.data as ProjectItemProps;
                return (
                    <ProjectItem key={item.id} {...itemData} slug={itemSlug} index={index} />
                )
            }
        })
    }

    return (
        <ul className="project-list">
            {projectListItems}
        </ul>
    )
}

export default Projects;