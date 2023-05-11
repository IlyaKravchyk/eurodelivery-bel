import { DescriptionVpn } from '../../../../assets/DescriptionVpn/DescriptionVpn';
import { DescriptionLink } from './DescriptionLink/DescriptionLink';
import { DescriptionLinks } from './DescriptionLinks/DescriptionLinks';
import { DescriptionTitle } from './DescriptionTitle/DescriptionTitle';

import style from './SinglePageItemsDescription.module.css';

export const SinglePageItemsDescription = ({ thisDataPage }) => {

	const dataLinks = thisDataPage.links

	const createLink = dataLinks.map(({ textLink, descriptionLink, id }) => <DescriptionLink
		textLink={textLink}
		descriptionLink={descriptionLink}
		key={id}
	/>)

	return (
		<div className={style.description}>
			<DescriptionTitle
				title={thisDataPage.title}
			/>
			<DescriptionVpn />
			<DescriptionLinks>
				{createLink}
			</DescriptionLinks>
		</div>
	)
}