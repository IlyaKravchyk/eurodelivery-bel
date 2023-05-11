import { DescriptionList } from './DescriptionList/DescriptionList';
import { DescriptionTitle } from './DescriptionTitle/DescriptionTitle';

import style from './OrderingDescription.module.css';
import { Warning } from './Warning/Warning';

export const OrderingDescription = () => {
	return (
		<div className={style.description}>
			<DescriptionTitle />
			<DescriptionList />
			<Warning />
		</div>
	)
}