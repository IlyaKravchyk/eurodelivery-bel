import { ButtonClose } from '../../../assets/ButtonClose/ButtonClose';
import style from './HeaderSinglePage.module.css';

export const HeaderSinglePage = () => {
	return (
		<div className={style.header}>
			<div className={style.wrapper}>
				<div className={style.description}>
					Все товары
				</div>
				<div className={style.btnClose}>
					<ButtonClose />
				</div>
			</div>
		</div>
	)
}