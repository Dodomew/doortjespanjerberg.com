// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../prismic-configuration";
import { PrismicDocument } from "../../types/PrismicDocumentType";
import { SliceController } from "../../slices/SliceController";
import { ProjectDetailHero } from "./ProjectDetailHero";
import { HeroImagesGrid } from "./ProjectDetailHero";

interface ParamsProps {
	uid: string;
}

const ProjectDetail = () => {
	const [projectDetailData, setProjectDetailData] = useState<PrismicDocument>();
	const { uid } = useParams<ParamsProps>();

	async function fetchData(uid: string) {
		const doc = await client.getByUID('project_detail', uid, {});
		setProjectDetailData(doc);
	}

	useEffect(() => {
		if (!projectDetailData) {
			fetchData(uid);
		}
	}, [projectDetailData, uid])

	return (
		<div className="project-detail">
			{projectDetailData ? (
				<>
					<ProjectDetailHero {...projectDetailData.data} />
					<div className="cms-content">
						{SliceController({ ...projectDetailData.data })}
					</div>
				</>

			) : (
					<HeroImagesGrid />
				)}
		</div>
	);
};

export default ProjectDetail;
