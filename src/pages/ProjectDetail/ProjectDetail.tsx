import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../prismic-configuration";
import { PrismicDocument } from "../../types/PrismicDocumentType";
import { SliceController } from "../../slices/SliceController";
import { ProjectDetailHero, ProjectDetailHeroProps } from "./ProjectDetailHero";

interface ParamsProps {
	uid: string;
}

const ProjectDetail = () => {
	const [projectDetailData, setProjectDetailData] = useState<PrismicDocument>();
	const { uid } = useParams<ParamsProps>();

	useEffect(() => {
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
			<ProjectDetailHero {...projectDetailData.data} />
			<div className="cms-content">
				{SliceController({ ...projectDetailData.data })}
			</div>
		</div>
	);
};

export default ProjectDetail;
