import { OrderingDescription } from './OrderingDescription/OrderingDescription';
import { Title } from '../../assets/Title/Title';
import { OrderingImage } from './OrderingImage/OrderingImage';

import style from './Ordering.module.css';

export const Ordering = () => {
	return (
		<div className={style.ordering}>
			<div className={style.wrapper}>
				<Title>
					Оформление заказа
				</Title>
				<div className={style.items}>
					<OrderingDescription />
					<OrderingImage />
				</div>
			</div>
		</div>
	)
}