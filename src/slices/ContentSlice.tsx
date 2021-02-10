import React from 'react';
import { PrismicTextProps } from "../types/PrismicTextProps";

interface ContentSliceProps {
    slice_type: string;
    items: [
        {
            text: PrismicTextProps;
        }
    ];
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
                        <p key={title + "_paragraph_" + index}>
                            {item.text[0].text}
                        </p>
                    )
                })
            }
        </div>
    )
}

export type { ContentSliceProps };
export { ContentSlice };