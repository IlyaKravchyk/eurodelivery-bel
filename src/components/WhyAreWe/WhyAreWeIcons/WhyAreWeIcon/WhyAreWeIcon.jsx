import style from './WhyAreWeIcon.module.css';

export const WhyAreWeIcon = ({ children, urlImage }) => {
	return (
		<div className={style.item}>
			<div className={style.wrapper}>
				<img className={style.image} src={urlImage} alt='icon' />
			</div>
			<div className={style.descripton}>
				{children}
			</div>
		</div>
	)
}