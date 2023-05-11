import style from './WarningDescription.module.css';

export const WarningDescription = () => {
	return (
		<ul className={style.list}>
			<li className={style.text}>
				Доставленные товары из Польских интернет-магазинов обмену и возврату не подлежат!
			</li>
			<li className={style.text}>
				Если ВЫ не уверены в том, что выкупите товар, то убедительная просьба его не оформлять!
			</li>
			<li className={style.text}>
				Учитывайте данную информацию перед оформлением заказа.
				Всем удачных покупок❤️
			</li>
		</ul>
	)
}