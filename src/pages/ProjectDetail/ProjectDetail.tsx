import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../prismic-configuration";
import { PrismicDocument } from "../../types/PrismicDocumentType";
import { SliceController } from "../../slices/SliceController";
import { ProjectDetailHero, ProjectDetailHeroProps } from "./ProjectDetailHero";
import { HeroImagesGrid } from "./ProjectDetailHero";

interface ParamsProps {
	uid: string;
}

interface SkeletonProps {
	show: boolean;
}

const SkeletonWrapper: FunctionComponent<SkeletonProps> = ({ show, children }) => {
	if (!show) {
		return (
			<div className="skeleton-project-list">
				{Array(6).fill(0)
					.map((item, index) => (
						<div className="skeleton-project-list__item" key={`skeleton-project-listitem${index}`}></div>
					))}
			</div>
		)
	}
	else {
		return (
			<>
				{children}
			</>
		)
	}
};

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
