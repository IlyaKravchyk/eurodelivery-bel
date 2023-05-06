import style from './Footer.module.css';
import { Logo } from '../../assets/Logo/Logo';
import { FooterIcons } from './FooterIcons/FooterIcons';
import { Container } from '../Container/Container';
import { Welcome } from './Welcome/Welcome';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<div className={style.wrapper}>
					<Logo />
					<Welcome />
					<FooterIcons />
				</div>
			</Container>
		</footer>
	)
}