import style from './ButtonArrow.module.css';
import { Link as LinkScroll } from 'react-scroll'

export const ButtonArrow = () => (
	<div className={style.arrowWrapper}>

		<LinkScroll
			to="scroll"
			spy={false}
			smooth={true}
			offset={-95}
			duration={50}
		>
			<i className="fa fa-angle-down" aria-hidden="true"></i>
		</LinkScroll>
	</div>
)