import { Link } from 'react-router-dom';
import style from './FooterIcon.module.css';

export const FooterIcon = ({ children, url }) => {
	return (
		<Link to={url} className={style.link} target='_blank'>
			{children}
		</Link>
	)
}