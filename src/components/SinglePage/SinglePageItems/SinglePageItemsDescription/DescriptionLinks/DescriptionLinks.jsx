import style from './DescriptionLinks.module.css';

export const DescriptionLinks = ({ children }) => {
	return (
		<div className={style.links}>
			<ul className={style.wrapper}>
				{children}
			</ul>
		</div>
	)
}