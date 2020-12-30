import React from "react";

interface MediaSliceProps {
    slice_type: string,
    items: [
        {
            media: {
                url: string,
                dimensions: {
                    width: number,
                    height: number
                }
            }
        }
    ]
}

const MediaSlice = (data: MediaSliceProps) => {
  const { url, dimensions } = {
    ...data.items[0].media,
  };

  return (
    <div className="media">
      <h1>{url}</h1>
    </div>
  );
};

export type { MediaSliceProps };
export { MediaSlice };
