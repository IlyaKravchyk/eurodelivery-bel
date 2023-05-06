import { Link } from 'react-router-dom';
import style from './Logo.module.css';

export const Logo = () => (
	<div className={style.logo}>
		<Link to='/' className={style.logoLink}>
			<div className={style.logoWrapper}>
				<img className={style.Imagelogo} src="https://i.ibb.co/F35cRz1/delivery.png" alt="logo" />
			</div >
			<div className={style.text}>
				Eurodelivery
			</div>
		</Link>
	</div>
)