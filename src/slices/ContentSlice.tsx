// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicTextProps } from "../types/PrismicTextProps";

interface ContentSliceProps {
    slice_type: string;
    items: PrismicTextProps;
    primary: {
        title: PrismicTextProps;
    };
}

const ContentSlice = (data: ContentSliceProps) => {
    const { title } = { ...data.primary };
    return (
        <div className="cms-paragraph">
            <h4>{title[0].text}</h4>
            {
                data.items.map((item, index) => {
                    return (
                        <RichText render={[item]} key={`title + "_paragraph_" + ${index}`} />
                    )
                })
            }
        </div>
    )
}

export type { ContentSliceProps };
export { ContentSlice };