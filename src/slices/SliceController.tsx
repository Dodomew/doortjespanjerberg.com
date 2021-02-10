// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from "react";
import { MediaSlice, MediaSliceProps } from "./MediaSlice";
import { ContentSlice, ContentSliceProps } from "./ContentSlice";

interface SliceControllerProps {
    body: [
        {
            slice_type: string;
        }
    ];
}

const SliceController = (data: SliceControllerProps) => {
    const sliceData = data.body;
    let sliceJSX = null;

    if (sliceData.length > 0) {
        sliceJSX = sliceData.map((slice, index) => {
            switch (slice.slice_type) {
                case "media":
                    const mediaSliceData = slice as MediaSliceProps;
                    return (
                        <MediaSlice key={mediaSliceData.slice_type + index} {...mediaSliceData} />
                    );
                case "content":
                    const contentSliceData = slice as ContentSliceProps;
                    return (
                        <ContentSlice key={contentSliceData.slice_type + index} {...contentSliceData} />
                    );
                default:
                    return null;
            }
        })
    }

    return sliceJSX;
};

export type { SliceControllerProps };
export { SliceController };
