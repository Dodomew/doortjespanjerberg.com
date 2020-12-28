import Prismic from 'prismic-javascript';
import React, { useEffect, useState } from 'react'
import { client } from '../../prismic-configuration';
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse";
import {ProjectItem} from "./ProjectItem/ProjectItem";
import {ProjectItemProps} from "./ProjectItem/ProjectItem";

const Projects = () => {
    const [listData, setListData] = useState<ApiSearchResponse>();

    useEffect(() => {
        if(listData) {
            console.log(listData)
        }
    })
    const queryOptions = { orderings: "[my.dialogue_page.date desc]" };

    client.query([
        Prismic.Predicates.at('document.type', 'project_detail'),
        Prismic.Predicates.at('my.project_detail.parent', 'X-MM-RAAACAAoI6Q')
    ], queryOptions).then(res => {
        setListData(res);
    });

    let projectListItems = null;

    if(listData && listData.results.length > 0) {
        projectListItems = listData.results.map((item) => {
            if(item.data) {
                const itemData = item.data as ProjectItemProps;
                return (
                    <ProjectItem key={item.id} {...itemData}/>
                )
            }
        })
    }

    return(
        <ul>
            {projectListItems}
        </ul>
    )
}

export default Projects;