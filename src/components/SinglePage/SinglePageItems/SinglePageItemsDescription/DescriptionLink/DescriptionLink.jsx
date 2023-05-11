import { Link } from 'react-router-dom';
import style from './DescriptionLink.module.css';

export const DescriptionLink = ({ textLink, descriptionLink }) => {
	return (
		<li className={style.link}>
			<Link className={style.url} to={textLink} target="_blank" >
				{textLink}
			</Link>
			<span className={style.text}>
				{descriptionLink}
			</span>
		</li>
	)
}