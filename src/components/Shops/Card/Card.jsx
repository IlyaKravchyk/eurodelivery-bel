import { Link } from 'react-router-dom';
import style from './Card.module.css';

export const Card = ({ urlImage, title, id, category }) => {

	return (
		<div className={style.card} id={id}>
			<Link to={`./${category}`}>
				<div className={style.container}>
					<div className={style.imageContainer}>
						<img src={urlImage} alt="icon" />
					</div>
					<div className={style.description}>
						{title}
					</div>
				</div>
			</Link>
		</div>
	)
}