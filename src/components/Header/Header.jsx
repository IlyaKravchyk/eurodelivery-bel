import { Container } from '../Container/Container';
import { ButtonArrow } from './ButtonArrow/ButtonArrow';
import { Email } from './Email/Email';
import style from './Header.module.css';
import { HeaderTitle } from './HeaderTitle/HeaderTitle';

export const Header = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.wrapper}>
					<HeaderTitle />
					<Email />
					<ButtonArrow />
				</div>

			</Container>
		</header>
	)
}