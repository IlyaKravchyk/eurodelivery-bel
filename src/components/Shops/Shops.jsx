import { Container } from '../Container/Container';
import style from './Shops.module.css';
import { Title } from './Titile/Titile';
import { Cards } from './Cards/Cards';
import { shopData } from '../../data/shopData';

export const Shops = () => {

	return (
		<section className={style.shops}>
			<Container>
				<Title />
				<Cards
					shopData={shopData}
				/>
			</Container>
		</section>
	)
}