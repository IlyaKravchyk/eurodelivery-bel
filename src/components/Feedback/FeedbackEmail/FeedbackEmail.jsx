import { Link } from 'react-router-dom';

import style from './FeedbackEmail.module.css';

export const FeedbackEmail = () => {
	return (
		<div className={style.text}>
			Хотите задать нам вопрос или проверить статус вашего заказа? Вы можете легко связаться с нами через Direct или отправить нам электронное письмо по адресу&nbsp;
			<Link className={style.emailLink} to="mailto:https://euro_delivery@mail.ru" target="_blank">
				euro_delivery@mail.ru
			</Link>
		</div>
	)
}