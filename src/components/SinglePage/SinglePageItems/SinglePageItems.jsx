import { SinglePageItemsDescription } from './SinglePageItemsDescription/SinglePageItemsDescription';
import style from './SinglePageItems.module.css';

export const SinglePageItems = ({ thisDataPage }) => {

	const clickHandler = (e) => {
		e.stopPropagation()
	}

	return (
		<div className={style.wrapper}>
			<div className={style.items} onClick={clickHandler}>
				<div className={style.itemsImage}>
					<img src={thisDataPage.urlImage} alt={thisDataPage.category} />
				</div>
				<SinglePageItemsDescription
					thisDataPage={thisDataPage}
				/>
			</div>
		</div>
	)
}