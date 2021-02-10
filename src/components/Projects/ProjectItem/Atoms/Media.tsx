// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';

type MediaProps = {
    alt: string,
    url: string,
    dimensions: {
        width: number,
        height: number
    },
    index: number
}

const Media = (data: MediaProps) => {
    return (
        <div className="project-listitem__media">
            <div className="project-listitem__bg-wrapper">
                <div
                    className={'project-listitem__bg bg-' + data.index}
                >
                    <div className={'project-listitem__inner project-listitem__bg bg-' + data.index}></div>
                </div>
            </div>
            <div
                className="project-listitem__img"
                style={{ backgroundImage: "url(" + data.url + ")" }}></div>
        </div>
    )
}

export default Media;