import React from 'react';

interface ProjectItemProps {
    body: [],
    hero_link: string,
    hero_media: {
        alt: string,
        url: string,
        dimensions: {
            width: number,
            height: number
        }
    },
    hero_title: [
        { text: string}
    ]
}

const ProjectItem = (data: ProjectItemProps) => {
    const { hero_title } = { ...data };
      return(
          <li>
              {hero_title[0].text}
          </li>
      )
}

export type { ProjectItemProps };
export { ProjectItem };