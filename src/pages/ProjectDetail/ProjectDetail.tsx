import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../prismic-configuration";
import { PrismicDocument } from "../../types/PrismicDocumentType";
import { PrismicTextProp } from "../../types/PrismicTextProp";
import { SliceController } from "../../slices/SliceController";

interface ParamsProps {
	uid: string;
}

interface ProjectDetailProps {
	body: []
	media: {
		dimensions: {
			width: number;
			height: number;
		};
		alt: null;
		url: string;
	};
	subtitle: PrismicTextProp
	title: PrismicTextProp
}

const ProjectDetail = () => {
	const [projectDetailData, setProjectDetailData] = useState<PrismicDocument>();
	const { uid } = useParams<ParamsProps>();

	useEffect(() => {
		console.log(projectDetailData);
		if (!projectDetailData) {
			fetchData(uid);
		}
	}, [projectDetailData])

	async function fetchData(uid: string) {
		const doc = await client.getByUID('project_detail', uid);
		setProjectDetailData(doc);
	}

	if (!projectDetailData) {
		return null;
	}

	return (
		<div className="project-detail">
			<h2>{projectDetailData.data.title[0].text}</h2>
			<img src={projectDetailData.data.media.url} />
			{ SliceController({ ...projectDetailData.data })}
		</div>
	);
};

export default ProjectDetail;
