import React from "react";
import { MediaSlice, MediaSliceProps} from "./MediaSlice";

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

    if(sliceData.length > 0) {
        sliceJSX = sliceData.map((slice) => {
            switch (slice.slice_type) {
                case "media":
                    const mediaSliceData = slice as MediaSliceProps;
                    return(
                        <MediaSlice {...mediaSliceData}/>
                    );
                default:
                    break;
            }
        })
    }

    return sliceJSX;
};

export type { SliceControllerProps };
export { SliceController };
