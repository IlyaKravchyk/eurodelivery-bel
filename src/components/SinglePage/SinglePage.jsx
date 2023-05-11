import { Container } from "../Container/Container";
import { HeaderSinglePage } from "./HeaderSinglePage/HeaderSinglePage";
import { SinglePageItems } from "./SinglePageItems/SinglePageItems";
import { shopData } from "../../data/shopData";

import style from './SinglePage.module.css';
import { useNavigate, useParams } from "react-router-dom";

export const SinglePage = () => {

	const navigate = useNavigate();
	const { category } = useParams();

	const goBack = () => navigate(-1)
	const thisDataPage = shopData.find(item => item.category === category)
	const clickHandler = () => {
		goBack()
	}

	return (
		<div className={style.singlePage} onClick={clickHandler}>
			<div className={style.wrapper}>
				<HeaderSinglePage />

				<Container>
					<SinglePageItems
						thisDataPage={thisDataPage}
					/>
				</Container>
			</div>
		</div>
	)
}