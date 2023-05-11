import { Container } from '../Container/Container';
import { FeedbackEmail } from './FeedbackEmail/FeedbackEmail';
import { FeedbackInstagram } from './FeedbackInstagram/FeedbackInstagram';

import style from './Feedback.module.css';

export const Feedback = () => {
	return (
		<div className={style.feedback}>
			<Container>
				<FeedbackEmail />
			</Container>
			<FeedbackInstagram />
		</div>
	)
}