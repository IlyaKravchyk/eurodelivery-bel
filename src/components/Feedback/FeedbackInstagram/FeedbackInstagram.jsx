import { Link } from 'react-router-dom';
import style from './FeedbackInstagram.module.css';
export const FeedbackInstagram = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.text}>
				Следите за нами в <Link className={style.instLink} to="https://instagram.com/eurodelivery.by?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
					instagram
				</Link>
			</div>
		</div>
	)
}