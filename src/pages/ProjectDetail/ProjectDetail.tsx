// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../prismic-configuration";
import { PrismicDocument } from "../../types/PrismicDocumentType";
import { ProjectDetailHero } from "./ProjectDetailHero";
import { HeroImagesGrid } from "./ProjectDetailHero";
import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../../ApiHelpers/HtmlSerializer";

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
						<RichText render={projectDetailData.data.text} htmlSerializer={htmlSerializer} />
					</div>
				</>

			) : (
					<HeroImagesGrid />
				)}
		</div>
	);
};

export default ProjectDetail;
