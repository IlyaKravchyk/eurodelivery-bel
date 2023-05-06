import { WhyAreWe } from '../WhyAreWe/WhyAreWe';
import style from './Main.module.css';

export const Main = () => {
	return (
		<div className={style.main}>
			<WhyAreWe />
		</div>
	)
}