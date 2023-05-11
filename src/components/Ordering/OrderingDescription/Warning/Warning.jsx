import { WarningTitle } from './WarningTitle/WarningTitle';
import { WarningDescription } from './WarningDescription/WarningDescription';

import style from './Warning.module.css';

export const Warning = () => {
	return (
		<div className={style.warning}>
			<WarningTitle />
			<WarningDescription />
		</div>
	)
}