import React from 'react';
import { PrismicTextProp } from "../types/PrismicTextProp";

interface ContentSliceProps {
    slice_type: string;
    items: [
        {
            text: PrismicTextProp;
        }
    ];
    primary: {
        title: PrismicTextProp;
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