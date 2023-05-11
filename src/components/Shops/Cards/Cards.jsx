import { Card } from '../Card/Card';
import style from './Cards.module.css';

export const Cards = ({ shopData }) => {

	const dataSingleCard = shopData.map(({ id, urlImage, title, category }) => <Card
		id={id}
		urlImage={urlImage}
		title={title}
		category={category}
		key={id}
	/>)

	return (
		<div className={style.cards}>
			<div className={style.items}>
				{dataSingleCard}
			</div>
		</div>
	)
}