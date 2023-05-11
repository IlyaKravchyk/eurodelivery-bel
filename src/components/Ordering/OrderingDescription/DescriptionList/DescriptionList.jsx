import style from './DescriptionList.module.css';

export const DescriptionList = () => {
	return (
		<ul className={style.list}>
			<div className={style.text}>
				Отправить ссылку на интересующий товар из представленных магазинов нам в Direct или электронную почту.
			</div>
			<div className={style.text}>
				Указать точную информацию по товару (размер, цвет и т.д).
			</div>
			<div className={style.text}>
				После чего мы высчитаем окончательную стоимость Вашего заказа.
			</div>
			<div className={style.text}>
				Оформление заказа.
			</div>
			<div className={style.text}>
				Ожидание заказа.
			</div>
		</ul>
	)
}