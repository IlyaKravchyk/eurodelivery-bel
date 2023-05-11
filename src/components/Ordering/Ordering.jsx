import { OrderingDescription } from './OrderingDescription/OrderingDescription';
import { OrderingTitle } from './OrderingTitle/OrderingTitle';
import { OrderingImage } from './OrderingImage/OrderingImage';

import style from './Ordering.module.css';

export const Ordering = () => {
	return (
		<div className={style.ordering}>
			<div className={style.wrapper}>
				<OrderingTitle />
				<div className={style.items}>
					<OrderingDescription />
					<OrderingImage />
				</div>
			</div>
		</div>
	)
}