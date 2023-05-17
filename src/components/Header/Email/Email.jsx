import { Link } from 'react-router-dom';
import style from './Email.module.css';

export const Email = () => (
	<div className={style.email} >
		<Link className={style.link} to="mailto:euro_delivery@mail.ru" target="_blank">
			euro_delivery@mail.ru
		</Link>
	</div>
)