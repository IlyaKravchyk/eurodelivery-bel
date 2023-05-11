import style from './ButtonClose.module.css';

export const ButtonClose = () => {
	return (
		<div className={style.button}>
			<i className="fa fa-times" aria-hidden="true"></i>
		</div>
	)
}