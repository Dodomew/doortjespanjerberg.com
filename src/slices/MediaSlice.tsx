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

const MediaItems = (data: MediaSliceProps) => {
	const items = data.items.map((item, index) => {
		return (
			<div className="cms-media__list-item">
				<img src={item.media.url} alt=""></img>
			</div>)
	});
	return (
		<div className="cms-media__list">
			{items}
		</div>
	)
}

const MediaSlice = (data: MediaSliceProps) => {
	const { url, dimensions } = {
		...data.items[0].media,
	};

	return (
		<div className="cms-media">
			<MediaItems {...data} />
		</div>
	);
};

export type { MediaSliceProps };
export { MediaSlice };
