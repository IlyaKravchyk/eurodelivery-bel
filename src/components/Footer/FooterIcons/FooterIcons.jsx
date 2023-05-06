import { ReactComponent as Instagram } from '../../../assets/img/footer/instagram.svg';
import { ReactComponent as Email } from '../../../assets/img/footer/email.svg';


import style from './FooterIcons.module.css';
import { FooterIcon } from './FooterIcon/FooterIcon';

export const FooterIcons = () => {
	return (
		<div className={style.icons}>
			<h3 className={style.title}>Контакты:</h3>
			<FooterIcon url='https://www.instagram.com/'>
				<Instagram />
			</FooterIcon>
			<FooterIcon url='https://mail.ru/'>
				<Email />
			</FooterIcon>

		</div>
	)
}