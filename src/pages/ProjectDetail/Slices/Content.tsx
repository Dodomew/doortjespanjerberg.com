import React from 'react';
import { PrismicTextProps } from "../../../types/PrismicTextProps";

interface ContentSliceProps {
    items: [PrismicTextProps];
    primary: PrismicTextProps;
}

const ContentSlice = (data: ContentSliceProps) => {
    return (
        <div>
            <h3>{data.primary[0].text}</h3>
            {
                data.items.map((item) => {
                    return (
                        <p>
                            {item[0].text}
                        </p>
                    )
                })
            }
        </div>
    )
}

export type { ContentSliceProps };
export { ContentSlice };