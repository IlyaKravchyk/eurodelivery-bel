import { Feedback } from '../Feedback/Feedback';
import { Ordering } from '../Ordering/Ordering';
import { Shops } from '../Shops/Shops';
import { WhyAreWe } from '../WhyAreWe/WhyAreWe';

import style from './Main.module.css';

export const Main = () => {
	return (
		<div className={style.main}>
			<WhyAreWe />
			<Shops />
			<Ordering />
			<Feedback />
		</div>
	)
}