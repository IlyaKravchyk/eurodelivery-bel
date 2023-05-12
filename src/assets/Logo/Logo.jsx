import { animateScroll as scroll } from 'react-scroll';

import style from './Logo.module.css';

export const Logo = () => {

	const scrollHandler = () => scroll.scrollToTop({ duration: 50 })

	return (
		<div className={style.logo} onClick={scrollHandler}>
			<div className={style.logoLink}>
				<div className={style.logoWrapper}>
					<img className={style.Imagelogo} src="https://i.ibb.co/F35cRz1/delivery.png" alt="logo" />
				</div >
				<div className={style.text}>
					Eurodelivery
				</div>
			</div>
		</div>
	)
}