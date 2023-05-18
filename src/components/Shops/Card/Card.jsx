import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import style from './Card.module.css';

export const Card = ({ urlImage, title, id, category, index }) => {

	const animationCase = {
		hidden: {
			x: -100,
			opacity: 0
		},
		visible: custom => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.1 }
		})
	}

	return (
		<motion.div
			className={style.card}
			id={id}
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.1, once: true }}
		>
			<Link to={`./${category}`}>
				<motion.div
					className={style.container}
					variants={animationCase}
					custom={index}
				>
					<div className={style.imageContainer}>
						<img src={urlImage} alt="icon" />
					</div>
					<div className={style.description}>
						{title}
					</div>
				</motion.div>
			</Link>
		</motion.div>
	)
}
