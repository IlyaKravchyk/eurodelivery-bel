import style from './ButtonArrow.module.css';

export const ButtonArrow = () => (
	<div className={style.arrowWrapper}>
		<a href="#scroll">
			<i className="fa fa-angle-down" aria-hidden="true"></i>
		</a>
	</div>
)