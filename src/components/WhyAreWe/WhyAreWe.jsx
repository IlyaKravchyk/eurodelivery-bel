import { Title } from "../../assets/Title/Title";
import { Container } from "../Container/Container";
import style from './WhyAreWe.module.css';
import { WhyAreWeIcons } from "./WhyAreWeIcons/WhyAreWeIcons";

export const WhyAreWe = () => {
	return (
		<section className={style.WhyAreWe} id="scroll" >
			<Container>
				<Title>
					Доставялем товар из Польши!
				</Title>
				<WhyAreWeIcons />
			</Container>
		</section>
	)
}