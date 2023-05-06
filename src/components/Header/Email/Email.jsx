import { Link } from 'react-router-dom';
import style from './Email.module.css';

export const Email = () => (
	<div className={style.email} >
		<Link className={style.link} to='https://e.mail.ru/inbox/' target="_blank">
			euro_delivery@mail.ru
		</Link>
	</div>
)