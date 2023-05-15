import { Container } from '../Container/Container';
import { Cards } from './Cards/Cards';
import { shopData } from '../../data/shopData';
import { Title } from '../../assets/Title/Title';

import style from './Shops.module.css';

export const Shops = () => {

	return (
		<section className={style.shops}>
			<Container>
				<Title myStyles={{
					'maxaWdth': '1000px',
					'fontWeight': ' 300',
					'textAlign': 'center'
				}}>
					Стильная одежда, обувь, аксессуары и многое другое
				</Title>
				<Cards
					shopData={shopData}
				/>
			</Container>
		</section>
	)
}