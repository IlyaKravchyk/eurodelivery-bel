import style from './DescriptionTitle.module.css';

export const DescriptionTitle = ({ title }) => {
	return (
		<h1 className={style.title}>
			{title}
		</h1>
	)
}