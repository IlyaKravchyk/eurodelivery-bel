import { Container } from "../Container/Container";
import { Title } from "./Title/Title";
import style from './WhyAreWe.module.css';
import { WhyAreWeIcons } from "./WhyAreWeIcons/WhyAreWeIcons";

export const WhyAreWe = () => {
	return (
		<section className={style.WhyAreWe} id="scroll" >
			<Container>
				<Title />
				<WhyAreWeIcons />
			</Container>
		</section>
	)
}