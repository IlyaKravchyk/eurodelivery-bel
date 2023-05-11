import { WhyAreWeIcon } from './WhyAreWeIcon/WhyAreWeIcon';
import style from './WhyAreWeIcons.module.css';

export const WhyAreWeIcons = () => {
	return (
		<div className={style.wrapper} >
			<div className={style.items}>
				<WhyAreWeIcon urlImage='https://i.ibb.co/F35cRz1/delivery.png'>
					Доставляем товар от 7 дней
				</WhyAreWeIcon>
				<WhyAreWeIcon urlImage='https://i.ibb.co/D1b29rW/original.png'>
					Только оригинальная продукция
				</WhyAreWeIcon>
				<WhyAreWeIcon urlImage='https://i.ibb.co/Wk9MqXZ/icons8-100.png'>
					В 1,5 - 2 раза дешевле,чем в Беларуси
				</WhyAreWeIcon>
			</div>
		</div>
	)
}